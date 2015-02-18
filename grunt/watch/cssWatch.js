(function() {
  'use strict';

  module.exports = {
    files: 'public/**/*.scss',
    tasks: ['injector:sass', 'compass', 'autoprefixer']
  };
}());
