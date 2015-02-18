(function() {
  'use strict';
  module.exports = {
    files: [
      'public/app/{,*//*}*.html',
      'public/app/{,*/*//*}*.html',
      'public/stylesheets/{,*//*}*.css',
      'public/app/{,*//*}*.js',
      'public/app/*/*/*.js',
      '!{.tmp,<%= directories.client %>}/{app,components}/**/*.spec.js',
      '!{.tmp,<%= directories.client %>}/{app,components}/**/*.mock.js',
      'public//images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
    ],
    options: {
      livereload: true
    }
  };
}());
