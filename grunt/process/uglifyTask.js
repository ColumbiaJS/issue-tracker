'use strict';

module.exports = function(filesToUglify) {
  return {
    dist:{
      files:{
        'dist/app.min.js': filesToUglify
      }
    }
  };
};
