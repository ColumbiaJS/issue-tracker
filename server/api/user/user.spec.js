(function () {
  'use strict';

  var server          = require('../../../server'),
      supertest       = require('supertest'),
      should          = require('should'),
      mochaConf       = require('../../../test/server/mocha.conf');

  describe('GET /api/users', function() {
    describe('Given an authenticated user:', function() {
      describe('When that user is an admin', function() {
        describe('And I request a list of users', function() {

          it('Then it should respond with a JSON array of users', function(done) {
            supertest(server)
              .get('/api/users')
              .set('Authorization', mochaConf.adminToken)
              .expect(200)
              .expect('Content-type', /json/)
              .end(function (err, res) {
                if (err) { return done(err); }
                res.body.should.be.instanceof(Array);
                done();
              });
          });

        });
      });


      describe('When that user is not an admin', function() {
        describe('And the user requests a list of users', function() {

          it('Then it should respond with 403 Forbidden', function(done) {
            supertest(server)
              .get('/api/users')
              .set('Authorization', mochaConf.userToken)
              .expect(403)
              .expect('Content-type', /json/)
              .end(function (err, res) {
                if (err) { return done(err); }
                done();
              });
          });

        });
      });
    });

    describe('Given an unauthenticated user', function() {
      describe('When the user requests a list of users', function() {
        it('Then it should respond with 401 not authorized', function(done) {
          supertest(server)
            .get('/api/users')
            .expect(401)
            .expect('Content-type', /json/)
            .end(function (err, res) {
              if (err) { return done(err); }
              done();
            });
        });
      });
    });
  });
})();
