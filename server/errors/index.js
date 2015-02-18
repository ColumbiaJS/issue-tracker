(function () {
  'use strict';

  function error(res, err) {
    var statusCode = 500;
    var result = { status: statusCode };
    res.status(statusCode);
    return res.send({ reason:err.toString() });
  }

  module.exports = error;
})();
