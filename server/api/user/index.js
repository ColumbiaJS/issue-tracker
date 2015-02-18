(function() {
  'use strict';

  var express       = require('express'),
      router        = express.Router(),
      jwt           = require('jwt-simple'),
      TOKEN_SECRET  = process.env.TOKEN_SECRET,
      User          = require('mongoose').model('User'),
      controller    = require('./users.controller'),
      authService   = require('../../auth/auth.service');

  router.get('/', authService.hasRole('admin'), controller.index);
  // router.get('/', authService.hasRole('admin'), controller.index);
  // router.delete('/:id', authService.hasRole('admin'), controller.destroy);
  router.delete('/:id', controller.destroy);
  router.get('/me', authService.ensureAuthenticated, controller.me);
  // router.put('/:id/password', authService.ensureAuthenticated, controller.changePassword);
  // router.put('/:id/password', controller.changePassword);
  router.get('/:id', authService.ensureAuthenticated, controller.show);
  router.post('/', controller.create);

  module.exports = router;
}());
