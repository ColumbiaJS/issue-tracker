(function() {
  'use strict';

  var mongoose   = require('mongoose'),
      timestamps = require('../../db/plugins/timestamps'),
      qs         = require('querystring'),
      bcrypt     = require('bcryptjs'),
      jwt        = require('jwt-simple'),
      Schema     = mongoose.Schema,
      ObjectId   = mongoose.Schema.Types.ObjectId;

  var ACCOUNT_STATUSES = 'pending active suspended cancelled deleted'.split(' ');
  var userSchema = mongoose.Schema({
    email           : {
      type:String,
      required:'{PATH} is required!',
      lowercase: true,
      unique:true
    },
    emailVerified   : {type:Boolean, default: false},
    password        : String,
    role            : {type:String, required:'{PATH} is required!', default: 'user'},
    accountStatus   : {
      type:String,
      required:'{PATH} is required!',
      enum: ACCOUNT_STATUSES,
      default: 'pending'
    },
    firstName       : {type:String, required:'{PATH} is required!'},
    lastName        : {type:String, required:'{PATH} is required!'},
    profileImageUrl : String,
    images          : {
      profile: {
        lrg: String,
        med: String,
        thumb: String
      }
    },
    provider        : String,
    displayName     : String,
    facebook        : {},
    github          : {},
    google          : {},
    linkedin        : {}
  });

  userSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) {
      return next();
    }
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash;
        next();
      });
    });
  });

  userSchema.plugin(timestamps);
  userSchema.methods = {
    comparePassword: function(passwordToMatch, done) {
      console.log('comparing password: ' + passwordToMatch);
      bcrypt.compare(passwordToMatch, this.password, function(err, isMatch) {
        if (err) {
          console.log('error matching password');
          console.log(err);
        } else {
          console.log('success matching password');
          console.log(isMatch);
        }
        done(err, isMatch);
      });
    },
    authenticate: function(passwordToMatch) {
      return this.comparePassword(passwordToMatch, done);
    },
    hasRole: function(role) {
      return this.role === role;
    }
  };

  var User = mongoose.model('User', userSchema);

  module.exports = User;
}());
