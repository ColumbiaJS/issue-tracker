(function () {
  'use strict';

  module.exports = {
    options: { browsers: ['last 2 versions'] },
    dist: {
      single_file: {
        options: {},
        src: 'public/stylesheets/css/style.css',
        dest: 'public/stylesheets/css/style.css'
      }
    }
  };
})();
