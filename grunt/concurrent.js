(function () {
  'use strict';

  module.exports = {
    dev1: {
      tasks: ['injector'],
      options: { logConcurrentOutput: true }
    },
    dev2: {
      tasks: ['wiredep', 'newer:jshint', 'compass', 'test:server'],
      options: { logConcurrentOutput: true }
    },
    dev3: {
      tasks: ['autoprefixer',  'test:client', 'serve'],
      options: { logConcurrentOutput: true }
    },
    build: {
      tasks: ['compass', 'imagemin', 'svgmin'],
      options: { logConcurrentOutput: true }
    }
  };
})();
