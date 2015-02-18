(function () {
  'use strict';

  var should = require('should'),
      server = require('../../../server'),
      mongoose = require('mongoose'),
      User = require('mongoose').model('User');

  var user = new User({
    provider : 'local',
    firstName: 'Bob',
    lastName : 'Jones',
    email    : 'bob.jones@example.com',
    password : 'password'
  });

  describe('User', function () {
    // FIXME: (REFACTOR) this should be 2 methods
    // clear the db of users before we begin testing
    before(function (done) {
      User.remove().exec().then(function () {
        done();
      });
    });

    // we must remove the user, if any, after each test,
    // to ensure that every case starts clean, with no users
    // in the system
    afterEach(function (done) {
      User.remove().exec().then(function () {
        done();
      });
    });

    // BASE CASE
    describe('When no users have yet been created', function () {
      it('Then there should be no users in the database', function(done) {
        User.find({}, function (err, users) {
          users.should.have.length(0);
          done();
        });
      });
    });

    // FIXME: this should perhaps be authService.authenticate(email, password)
    // // HAPPY PATH
    // it('should authenticate the user if the password is valid', function () {
    //   // user.authenticate('password').should.be.true;
    // });
    //
    //
    // // VALIDATION ERRORS
    // it('should not authenticate the user if the password is invalid', function () {
    //   // user.authenticate('notThePassword').should.not.be.true;
    // });

    describe('When a user already exists', function () {
      it('Then it should fail trying to save a duplicate user', function(done) {
        user.save(function () {
          var userDuplicate = new User(user);
          userDuplicate.save(function(err) {
            should.exist(err);
            done();
          });
        });
      });
    });

    it('should fail to save without an email', function (done) {
      user.email = '';
      user.save(function (err) {
        should.exist(err);
        done();
      });
    });


  });
}());
