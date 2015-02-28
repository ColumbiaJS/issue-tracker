(function() {
  'use strict';

  var app = angular.module('app.issue');

  app.factory('Issue', function($http) {
    var apiEndpoint = '/api/issues/';
    function Issue(issueData) {
      if (issueData) {
        this.setData(issueData);
      }
    }

    Issue.prototype = {
      setData: function(issueData) {
        angular.extend(this, issueData);
      },
      delete: function() {
        $http.delete(apiEndpoint + this._id);
      },
      update: function() {
        console.log('updating issue by putting to endpoint');
        $http.put(apiEndpoint + this._id, this);
      },
      deleteLink: function (link) {
        var endpoint = this.endpointWithId() + '/links/' + link._id;
        return $http.delete(endpoint).then(getDeleteData);
      },
      deleteFounder: function(founder) {
        var endpoint = this.endpointWithId() + '/founders/' + founder._id;
        return $http.delete(endpoint).then(getDeleteData);
      },
      endpointWithId: function() {
        return apiEndpoint + this._id;
      }
    };

    function getDeleteData(data, status, headers, config) {
      var dataToReturn = data.data;
      console.log('data in data for delete');
      console.log(data.data);
      return dataToReturn;
    }



    return Issue;
  });
}());
