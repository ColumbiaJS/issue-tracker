(function () {
  'use strict';


  var mongoose = require('mongoose');

  var timestamps = function(schema, options) {
    options = options || {};
    var settings = {
      userRequired: options.userRequired || false
    };
    schema.add({createdAt: {type: Date, default: Date.now}});
    schema.add({createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: settings.userRequired
    }});
    schema.add({updatedAt: {type: Date, default: Date.now}});
    schema.pre('save', function(next) {
      this.updatedAt = Date.now();
      next();
    });
  };

  module.exports = timestamps;

})();
