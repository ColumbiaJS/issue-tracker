(function () {
  'use strict';

  /*
   * ENDPOINTS:
   * GET     /api/issues     -> index
   * POST    /api/issues     -> create
   * GET     /api/issues/:id -> show
   * PUT     /api/issues/:id -> update
   * DELETE  /api/issues/:id -> destroy
   */

  var express    = require('express'),
      router     = express.Router(),
      controller = require('./issues.controller');

  router.get('/', controller.index);
  router.get('/:id', controller.show);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.destroy);

  module.exports = router;
})();
