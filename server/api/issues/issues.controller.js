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

    },
    update: function (req, res) {

    },
    destroy: function (req, res) {

    }
  };

  module.exports = issuesController;


})();
