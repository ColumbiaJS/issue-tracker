(function () {
  'use strict';


  var mongoose = require('mongoose');

  var paranoidDelete = function(schema, options) {
    schema.add({deleted:    {type:Boolean, default:false}});
    schema.add({deletedOn:  {type: Date}});
  };

  module.exports = paranoidDelete;

})();
