// create config setup for development and production

(function() {
  'use strict';
  var path     = require('path'),
      rootPath = path.normalize(__dirname + '/../../');

  module.exports = {
    development: {
      rootPath: rootPath,
      db: 'mongodb://localhost/issuetracker-dev',
      port: process.env.PORT || 3000,
      morganFormat: 'dev'
    },
    test: {
      rootPath: rootPath,
      db: 'mongodb://localhost/issuetracker-test',
      port: process.env.PORT || 3001,
      morganFormat: 'combined'
    },
    production: {
      rootPath: rootPath,
      db: process.env.MONGOLAB_URI,
      port: process.env.PORT || 80,
      morganFormat: 'combined'
    }
  };
}());
