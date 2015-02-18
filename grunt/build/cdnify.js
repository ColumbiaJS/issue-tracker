(function () {
  'use strict';

  /* LEVERAGE ALREADY SERVED LIBS AND GOOGLE'S CDN */
  /* BY REPLACING LIBS WITH GOOGLE CDN REFERENCES */
  module.exports = {
    dist: {
      html: ['<%= directories.dist %>/public/*.html']
    }
  };
})();
