(function() {
  'use strict';

  module.exports = {
    // one subtask for each module ?
    app: {
      options: {
        prefix: '/partials/',
        htmlmin: {
          collapseBooleanAttributes: false,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          removeEmptyAttributes: true,
          removeRedundantAttributes: false,
          removeScriptTypeAttributes: false,
          removeStyleLinkTypeAttributes: false
        },
        usemin: 'app/app.min.js'
      },
      cwd: '<%= directories.client %>/app',
      src: ['**/*.html'],
      dest: '.tmp/templates.js'
    }
  };
})();
