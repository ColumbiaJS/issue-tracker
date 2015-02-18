(function() {
  'use strict';

  var express = require('express'),
      authService = require('./auth.service'),
      providers = require('./auth.providers'),
      router = express.Router();

  module.exports = router;

  router.post('/login', authService.login)
    .post('/signup', authService.signup)
    .post('/google', providers.google)
    //      .post('/github', providers.github)
    //      .post('/linkedin', providers.linkedin)
    //      .post('/facebook', providers.facebook)
    .get('/unlink/:provider', authService.ensureAuthenticated, providers.unlinkProvider);
}());