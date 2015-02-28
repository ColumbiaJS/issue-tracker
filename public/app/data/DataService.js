(function () {
  'use strict';

  angular.module('app').factory('DataService', DataService);

  DataService.$inject = [
    '$http', '$location', '$q', 'common', 'User', 'Issue', '$timeout'
  ];

  function DataService($http, $location, $q, common, User, Issue, $timeout) {
    var logger = common.logger;
    var isPrimed = false;
    var primePromise;

    var service = {
      getUsers: getUsers,
      getUser: getUser,
      updateUser: updateUser,
      issues: [],
      getIssues: getIssues,
      getIssue: getIssue,
      createIssue: createIssue,
      updateIssue: updateIssue,
      ready: ready
    };

    return service;

    // @wip start to create a generic data service
    // var baseUri = '/api/';

    // function query (collection, params) {
    //   params = params || {};
    //   var uri = baseUri + collection;
    //   return $http({method: 'GET', url: uri, params: params, cache: false});
    // }

    function getUsers() {
      return $http.get('/api/users')
        .then(getUserData);

      function getUserData(data, status, headers, config) {
        var usersToReturn = [];
        angular.forEach(data.data, function(userData) {
          usersToReturn.push(new User(userData));
        });
        return usersToReturn;
      }
    }

    function getIssues() {
      return $http.get('/api/issues').then(getIssueData);

      function getIssueData(data, status, headers, config) {
        var issuesToReturn = [];
        console.log('data in data.data');
        console.log(data.data);
        angular.forEach(data.data, function(issueData) {
          // console.log(issueData);
          issuesToReturn.push(new Issue(issueData));
        });
        // we set these to same object so when we create issue it gets added to list
        service.issues = issuesToReturn;
        return issuesToReturn;
      }
    }

    function getData(data, status, headers, config) {
      var dataToReturn = data.data;
      return dataToReturn;
    }

    function get(apiPath, id) {
      return $http.get('/api/' + apiPath + '/' + id).then(getData);
    }

    function getIssue(id) {
      return get('issues', id).then(function (data) {
        return new Issue(data);
      });
    }

    function getUser(id) {
      return get('users', id).then(function (data) {
        return new User(data);
      });
    }

    function create(apiModelName, data) {
      return $http.post('/api/' + apiModelName, data).then(getData);
    }

    function createIssue(issueData) {
      return create('issues', issueData).then(function(data) {
        console.log('Success saving issue');
        var issueToReturn = new Issue(data);
        return $timeout(function () {
          service.issues.push(issueToReturn); // this causes IssueList to update
          return issueToReturn;
        });
      });
    }

    function update(apiModelName, data) {
      return $http.put('/api/' + apiModelName + '/' + data._id, data).then(getData);
    }

    function updateUser(userData) {
      return update('users', userData).then(function(data) {
        var userToReturn = new User(data);
        return userToReturn;
      });
    }

    function updateIssue(issueData) {
      return update('issues', issueData).then(function(data) {
        console.log('Success saving issue');
        console.log(data);
        var issueToReturn = new Issue(data);
        return issueToReturn;
      });
    }

    function ready() {
      logger.info('ready');
    }
  }
})();
