(function () {
  'use strict';

  var should          = require('should'),
      mongoose        = require('mongoose'),
      User            = require('../user.model'),
      UserDataService = require('./UserDataService'),
      Promise         = require('bluebird');

  function resetUsers() {
    return new Promise(function (resolve, reject) {
      User.remove().exec(resolve, reject);
    });
  }

  describe('Seeding Users', function() {
    var users, user;

    before('should have users', function(done) {
      resetUsers()
        .then(UserDataService.seedUsers)
        .then(UserDataService.findUsers)
        .then(function(userList) {
          users = userList;
          user = users[0];
          done();
        }, function(err) {
          return done(err);
        });
    });

    describe('When I seed users to the database', function() {
      it('Then there should be several users', function() {
        users.length.should.be.greaterThan(3);
      });

      /*jshint -W030 */
      it('Each user should have a first and last name', function() {
        user.firstName.should.exist;
        user.lastName.should.exist;
      });

      it('A user should have a role', function() {
        user.role.should.exist;
      });

      it('By default, the user\'s role should be \'user\'', function() {
        user.role.should.equal('user');
      });

      it('And their account status should be pending', function() {
        user.accountStatus.should.equal('pending');
      });

      it('And their email should not yet be verified', function() {
        user.emailVerified.should.not.be.true;
      });
    });
  });
})();
