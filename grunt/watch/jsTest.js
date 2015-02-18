(function() {
  'use strict';
  module.exports = {
    files: [
      'test/specs/{,*//*}*.js',
      'test/specs/**/{,*//*}*.js',
      '<%= directories.client %>/app/**/*.spec.js',
      '<%= directories.client %>/app/**/*.mock.js'
    ],
    tasks: ['newer:jshint:test', 'karma']
  };
}());
