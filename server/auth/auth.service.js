(function() {
  /*
   * @author Lev Brie
   * taken from angular-fullstack: https://github.com/DaftMonk/generator-angular-fullstack
   */
  'use strict';

  var mongoose      = require('mongoose'),
      User          = mongoose.model('User'),
      jwt           = require('jwt-simple'),
      moment        = require('moment'),
      TOKEN_SECRET  = process.env.TOKEN_SECRET;

  exports.ensureAuthenticated = ensureAuthenticated;
  exports.hasRole             = hasRole;
  exports.createToken         = createToken;
  exports.login               = login;
  exports.logout              = logout;
  exports.signup              = signup;

  function ensureAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
      console.log('NO AUTHORIZATION HEADER GIVEN');
      return res.status(401).send({
        message: 'Please make sure your request has an Authorization header'
      });
    }
    var token = req.headers.authorization.split(' ')[1],
        payload = jwt.decode(token, TOKEN_SECRET);

    if (payload.exp <= Date.now()) {
      return res.status(401).send({message: 'Token has expired'});
    }

    req.user = payload.sub;
    req.role = payload.role;
    next();
  }

  function createToken(req, user) {
    var payload = {
      iss: req.hostname,
      sub: user._id,
      role: user.role,
      iat: moment().valueOf(),
      exp: moment().add(14, 'days').valueOf()
    };
    return jwt.encode(payload, TOKEN_SECRET);
  }

  function login(req, res) {
    console.log('\n\nLOGGING IN USER\n\n');
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        console.log('error finding user');
        console.log(err);
      }
      if (!user) {
        console.log('could not find user');
        return res.status(401).send({ message: 'Wrong email and/or password' });
      }

      user.comparePassword(req.body.password, function(err, isMatch) {
        if (!isMatch) {
          console.log('password does not match user');
          return res.status(401).send({ message: 'Wrong email and/or password' });
        }
        res.send({ token: createToken(req, user) });
      });
    });
  }

  function logout(req, res) {
    req.headers.authorization = undefined;
    res.end();
  }

  function signup(req, res) {
    var user = new User();
    var name = req.body.displayName.split(' ');
    user.displayName = req.body.displayName;
    user.firstName = name[0];
    user.lastName = name[1];
    user.email = req.body.email;
    user.password = req.body.password;
    user.save(function(err) {
      if (err) { console.log(err); }
      res.status(200).end();
    });
  }

  /**
   * Attaches the user object to the request if authenticated
   * Otherwise returns 403
   */
//  function isAuthenticated() {
//    return compose()
//      // Validate jwt
//      .use(function(req, res, next) {
//        // allow access_token to be passed through query parameter as well
//        if(req.query && req.query.hasOwnProperty('access_token')) {
//          req.headers.authorization = 'Bearer ' + req.query.access_token;
//        }
//        validateJwt(req, res, next);
//      })
//      // Attach user to request
//      .use(function(req, res, next) {
//        User.findById(req.user._id, function (err, user) {
//          if (err) { return next(err); }
//          if (!user) { return res.send(401); }
//          req.user = user;
//          next();
//        });
//      });
//  }

  function hasRole(roleRequired) {
    if (!roleRequired) { throw new Error('Required role needs to be set'); }
    return function(req, res, next) {
      ensureAuthenticated(req, res, function() {
        if (req.role === roleRequired) {
          next();
        } else {
          res.status(403).json({message: 'Forbidden'});
        }
      });
    };
  }
  /**
   * Checks if the user role meets the minimum requirements of the route
   */
 // function hasRole(roleRequired) {
 //   if (!roleRequired) {
 //     throw new Error('Required role needs to be set');
 //   }

 //   return compose()
 //     .use(isAuthenticated())
 //     .use(function meetsRequirements(req, res, next) {
 //       if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
 //         next();
 //       }
 //       else {
 //         res.send(403);
 //       }
 //     });
 // }

  /**
   * Returns a jwt token signed by the app secret
   */
//  function signToken(id) {
//    return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });
//  }

  /**
   * Set token cookie directly for oAuth strategies
   */
//  function setTokenCookie(req, res) {
//    if (!req.user) {
//      return res.json(404, { message: 'Something went wrong, please try again.'});
//    }
//    var token = signToken(req.user._id, req.user.role);
//    res.cookie('token', JSON.stringify(token));
//    res.redirect('/');
//  }


//  exports.isAuthenticated = isAuthenticated;
//  exports.hasRole = hasRole;
//  exports.signToken = signToken;
//  exports.setTokenCookie = setTokenCookie;
}());
