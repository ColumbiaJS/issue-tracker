(function () {
  'use strict';

  var mongoose  = require('mongoose'),
      User      = require('../user.model'),
      usersJSON = require('./userSeed.json'),
      Promise   = require('bluebird');

  exports.findUsers = findUsers;
  exports.seedUsers = seedUsers;

  var createUser = Promise.promisify(User.create, User);

  function findUsers(query) {
    return Promise.cast(User.find(query).exec());
  }

  function seedUsers() {
    return findUsers({}).then(function (collection) {
      if (collection.length === 0) {
        return Promise.map(usersJSON, function (user) {
          return createUser(user);
        });
      }
    });
  }
})();
