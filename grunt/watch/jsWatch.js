(function () {
  'use strict';

  var projectFiles = require('../files.json');

  module.exports = {
    files: [projectFiles.js.public, projectFiles.js.server],
    tasks: ['reload']
  };

})();
