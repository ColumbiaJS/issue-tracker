(function () {
  'use strict';

  var passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy;


  exports.setup = function (User) {
    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({email:username.toLowerCase()}).exec(function(err, user) {
          if(user && user.authenticate(password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    ));

    // now we need to tell passport how to serialize and deserialize the user
    passport.serializeUser(function(user, done) {
      if(user) {
        done(null, user._id);
      }
    });

    passport.deserializeUser(function(id, done) {
      User.findOne({_id:id}).exec(function(err, user) {
        if(user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  };

})();
