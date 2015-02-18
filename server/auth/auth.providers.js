(function() {
  /*
   * @author Lev Brie
   * inspired by and largely abstracted from satellizer node examples:
   * https://github.com/sahat/satellizer
   */
  'use strict';

  var mongoose      = require('mongoose'),
      User          = mongoose.model('User'),
      authKeys      = require('./authKeys'),
      authService   = require('./auth.service'),
      TOKEN_SECRET  = process.env.TOKEN_SECRET,
      request       = require('request');

  exports.google = google;
  exports.unlinkProvider = unlinkProvider;

  function google(req, res) {
    var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
    var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

    var params = {
      client_id: req.body.clientId,
      redirect_uri: req.body.redirectUri,
      client_secret: authKeys.GOOGLE_SECRET,
      code: req.body.code,
      grant_type: 'authorization_code'
    };

    // Step 1. Exchange authorization code for access token.
    request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {

      var accessToken = token.access_token;
      var headers = { Authorization: 'Bearer ' + accessToken };

      // Step 2. Retrieve profile information about the current user.
      request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
        console.log('logging profile');
        console.log(profile);
        // Step 3a. If user is already signed in then link accounts.
        if (req.headers.authorization) {
          User.findOne({ 'google.sub': profile.sub }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
            }

            var token = req.headers.authorization.split(' ')[1];
            var payload = jwt.decode(token, TOKEN_SECRET);

            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }
              user.google = profile;
              console.log('setting user google profile');
              console.log(user.google);
              user.displayName = user.displayName || profile.name;
              user.save(function(err) {
                res.send({ token: authService.createToken(req, user) });
              });
            });
          });
        } else {
          // Step 3b. Create a new user account or return an existing one.
          User.findOne({ 'google.sub': profile.sub }, function(err, existingUser) {
            if (existingUser) {
              return res.send({ token: authService.createToken(req, existingUser) });
            }
            User.findOne({email: profile.email}, function(err, userWithEmail) {
              if (userWithEmail) {
                userWithEmail.google = profile;
                userWithEmail.provider = 'google';
                userWithEmail.save(function(err) {
                  if (err) {
                    console.log('error trying to add google account to existing user');
                    console.log(err);
                  }
                  return res.send({ token: authService.createToken(req, userWithEmail) });
                });
              } else {

                var user = new User();
                user.google = profile;
                user.firstName = profile.given_name;
                user.lastName = profile.family_name;
                user.email = profile.email;
                user.provider = 'google';
                if (profile.picture) {
                  user.profileImageUrl = profile.picture;
                }
                console.log('creating user in else statement');
                console.log(user.google);
                user.displayName = profile.name;
                user.save(function (err) {
                  if (err) {
                    console.log('error trying to save google account');
                    console.log(err);
                  }
                  res.send({ token: authService.createToken(req, user) });
                });

              }
            });

          });
        }
      });
    });
  }

  function unlinkProvider(req, res) {
    var provider = req.params.provider;
    User.findById(req.user, function(err, user) {
      if (!user) {
        return res.status(400).send({ message: 'User not found' });
      }

      user[provider] = undefined;
      user.save(function(err) {
        res.status(200).end();
      });
    });
  }



}());
