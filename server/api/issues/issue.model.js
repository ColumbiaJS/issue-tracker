(function () {
  'use strict';

  var mongoose = require('mongoose'),
      qs       = require('querystring'),
      ObjectId = mongoose.Schema.Types.ObjectId,
      ts       = require('../../db/plugins/timestamps'),
      _        = require('lodash');

  var Issue;
  var STATES = ['open', 'close'];
  var IssueSchema = mongoose.Schema({
    url: String,
    labels: [],
    milestone: {},
    number: Number,
    body: String,
    state: { type: String, enum: STATES },
    author: {type: ObjectId, ref: 'User'},
    assignee: {type: ObjectId, ref: 'User'},
    comments: []
  });

  Issue = mongoose.model('Issue', IssueSchema);

  module.exports = Issue;
})();
