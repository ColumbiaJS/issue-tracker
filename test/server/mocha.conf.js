(function () {
  'use strict';

  var authService = require('../../server/auth/auth.service'),
      users       = require('./fixtures/users');

  // fake request for authService to use - just requires hostname
  var req       = {hostname: '127.0.0.1'};

  var adminToken = authService.createToken(req, users.admin);
  adminToken = 'Bearer ' + adminToken;

  var userToken = authService.createToken(req, users.user);
  userToken = 'Bearer ' + userToken;

  exports.adminToken = adminToken;
  exports.userToken  = userToken;

  // initialize app if necessary - not currently necessary
  beforeEach(function (done) {
    done();
  });

  afterEach(function (done) {
    done();
  });

})();
