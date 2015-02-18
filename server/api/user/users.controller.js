(function () {
  'use strict';

  var express       = require('express'),
      jwt           = require('jwt-simple'),
      TOKEN_SECRET  = process.env.TOKEN_SECRET,
      authService   = require('../../auth/auth.service'),
      errorHandler  = require('../../errors'),
      User          = require('mongoose').model('User');

  var validationError = function(res, err) {
    return res.json(422, err);
  };
  var usersController = {


    me: function(req, res) {
      var token = req.headers.authorization.split(' ')[1],
          payload = jwt.decode(token, TOKEN_SECRET);
      User.findById(payload.sub, function(err, user) {
        if (err) { return res.render('500'); }
        var userToSend = {
          _id: user._id,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        };
        if (user.provider === 'google') {
          userToSend.provider = user.provider;
          userToSend.google = user.google;
        }
        return res.send(userToSend);
      });
    },
    index: function(req, res) {
      User.find(function (err, users) {
        if (err) { return errorHandler.error(res, err); }
        return res.status(200).send(users);
      });
    },
    show: function(req, res) {

    },
    // n.b. create is for admins only, otherwise creation is taken
    // care of in auth.service or auth.providers
    create: function(req, res, next) {
      var newUser = new User(req.body);
      newUser.provider = 'local'; // has to be local since admin is creating
      newUser.role = 'user';
      newUser.save(function (err, user) {
        if (err) { return validationError(res, err); }
        res.status(200).end();
      });
    },
    update: function(req, res) {

    },
    destroy: function(req, res) {

    }
  };

  module.exports = usersController;

})();
