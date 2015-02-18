(function () {
  'use strict';

  var express  = require('express'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User     = mongoose.model('User');

  // Passport Configuration
  require('./local').setup(User);
  // require('./facebook').setup(User, config);
  // require('./google').setup(User, config);
  // require('./linkedin').setup(User, config);

  // see angular-fullstack server/auth for impelmentation details
  // we take a slightly different approach
  var router = express.Router();

  router.use('/local', require('./local.router'));
  // router.use('/facebook', require('./facebook.router'));
  // router.use('/twitter', require('./twitter.router'));
  // router.use('/google', require('./google.router'));

  module.exports = router;

})();
