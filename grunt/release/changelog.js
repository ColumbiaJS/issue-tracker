(function() {
  'use strict';
  module.exports = function(grunt) {
    return {
      options: {
        dest: 'CHANGELOG.md',
        version: require('../../package.json').version,
        versionFile: require('../../package.json'),
        repository: 'https://github.com/columbiajs/generator-columbia-angular'
      }
    };
  };
}());
