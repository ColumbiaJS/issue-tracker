(function () {
  'use strict';

  var _            = require('lodash'),
      errorHandler = require('../../errors'),
      Issue        = require('mongoose').model('Issue');

  var issuesController = {
    index: function (req, res) {
      Issue.find({})
        .populate('author')
        .exec(function (err, issues) {
          if (err) {return errorHandler.error(res, err); }
          return res.status(200).send(issues);
        });
    },
    show: function (req, res) {
      var id = req.params.id;
      Issue.findOne({_id: id})
        .populate('author')
        .exec(callback);

      function callback(err, issue) {
        if (err) { return errorHandler.error(res, err); }
        return res.status(200).json(issue);
      }
    },
    create: function (req, res) {
      var newIssue = new Issue(req.body);
      newIssue.created_at = Date.now();
      newIssue.updated_at = Date.now();
      newIssue.state = 'open';
      newIssue.save(function (err, issue) {
        if (err) { return errorHandler.error(res, err); }
        console.log('saved issue');
        console.log(issue);
        return res.status(200).send(issue);
      });
    },
    update: function (req, res) {
      console.log('UPDATING ISSUE ON SERVER');
      var id = req.params.id;
      Issue.findOne({_id: id}).exec(updateIssue(req, res));
    },
    destroy: function (req, res) {
      Issue.remove({_id: req.params.id}, function (err) {
        if (err) { return errorHandler.error(res, err); }
        return res.status(204).send({message: 'Document removed'});
      });
    }
  };

  function updateIssue(req, res) {
    return function (err, issue) {
      if (err) { return errorHandler.error(res, err); }
      if (!issue) { return res.status(404).send({reason: err.toString()}); }
      var issueData = req.body;
      issue.url = issueData.url;
      issue.milestone = issueData.milestone;
      issue.number = issueData.number;
      issue.title = issueData.title;
      issue.body = issueData.body;
      issue.state = issueData.state;
      issue.author = issueData.author;
      issue.assignee = issueData.assignee;
      issue.user = issueData.user;
      issue.created_at = issueData.created_at;
      issue.updated_at = issueData.updated_at;
      issue.closed_at = issueData.closed_at;
      issue.save(function (err, data) {
        onIssueSave(req, res, err, data);
      });
    };
  }

  function onIssueSave (req, res, err, data) {
    if(err) {
      return errorHandler.error(res, err);
    }
    return res.status(200).send(data);
  }

  module.exports = issuesController;


})();
