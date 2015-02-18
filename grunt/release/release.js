(function() {
  'use strict';
  module.exports = {
    options: {
      tagName: 'v<%= version %>',
      bump: false, // we need to do this ourselves for conventional-changelog
      file: 'package.json',
      // file: 'component.json', //default: package.json
      // add: false, //default: true
      // commit: false, //default: true
      // tag: false, //default: true
      // push: false, //default: true
      // pushTags: false, //default: true
      npm: false, //default: true
      // npmtag: true, //default: no tag
      // indentation: '\t', //default: '  ' (two spaces)
      // folder: 'folder/to/publish/to/npm', //default project root
      // tagName: 'some-tag-<%= version %>', //default: '<%= version %>'
      commitMessage: 'release v<%= version %>',
      // commitMessage: 'check out my release <%= version %>', //default: 'release <%= version %>'
      // tagMessage: 'tagging version <%= version %>', //default: 'Version <%= version %>',
      // github: {
      //   repo: 'geddski/grunt-release', //put your user/repo here
      //   usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username
      //   passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
      // }
    }
  };
}());
