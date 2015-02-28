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
    title: String,
    body: String,
    state: { type: String, enum: STATES },
    author: {type: ObjectId, ref: 'User'},
    assignee: {type: ObjectId, ref: 'User'},
    user: {},
    created_at: Date,
    updated_at: Date,
    closed_at: Date,
    comments: []
  });

  IssueSchema.statics.findMax = function (callback) {
    this.findOne({}) // 'this' now refers to the Member class
      .sort({number: -1})
      .limit(1)
      .exec(callback);
  };

  IssueSchema.pre('save', function (next) {
    var issue = this;
    issue.updated_at = Date.now();
    if (!issue.number) {
      Issue.findMax(function (err, max) {
        console.log('FOUND MAX');
        console.log(max.number);
        issue.number = max.number + 1;
        next();
      });
    } else {
      next();
    }
  });

  Issue = mongoose.model('Issue', IssueSchema);

  module.exports = Issue;
})();
