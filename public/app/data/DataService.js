(function () {
  'use strict';

  angular.module('app').factory('DataService', DataService);

  DataService.$inject = [
    '$http', '$location', '$q', 'common', 'User', 'Issue'
  ];

  function DataService($http, $location, $q, common, User, Issue) {
    var logger = common.logger;
    var isPrimed = false;
    var primePromise;

    var service = {
      getUsers: getUsers,
      getUser: getUser,
      updateUser: updateUser,
      getIssues: getIssues,
      getIssue: getIssue,
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
          console.log(issueData);
          issuesToReturn.push(new Issue(issueData));
        });
        return issuesToReturn;
      }
    }

    function getData(data, status, headers, config) {
      var dataToReturn = data.data;
      console.log('data returned for single model');
      console.log(data);
      console.log('data in data for single model');
      console.log(data.data);
      return dataToReturn;
    }

    function get(apiPath, id) {
      return $http.get('/api/' + apiPath + '/' + id).then(getData);


    }

    function getIssue(id) {
      return get('issues', id).then(function (data) {
        return new Issue(data);
      });
      // return $http.get('/api/issues/' + id).then(getData);

      // function getData(data, status, headers, config) {
      //   var issueData = data.data;
      //   var issueToReturn;

      //   issueToReturn = new Issue(issueData);
      //   return issueToReturn;
      // }
    }

    function getUser(id) {
      return get('users', id).then(function (data) {
        return new User(data);
      });
      // return $http.get('/api/users/' + id).then(getData);

      // function getData(data, status, headers, config) {
      //   var userData = data.data;
      //   var userToReturn;
      //   console.log('data returned for single user');
      //   console.log(data);
      //   console.log('data in data for single user');
      //   console.log(data.data);
      //   userToReturn = new User(userData);
      //   return userToReturn;
      // }
    }

    function update(apiModelName, data) {
      return $http.put('/api/' + apiModelName + '/' + data._id, data).then(getData);

      // function getData(data, status, headers, config) {
      //   var dataToReturn = data.data;
      //   console.log('data returned for update');
      //   console.log(data);
      //   console.log('data in data for update');
      //   console.log(data.data);
      //   return dataToReturn;
      // }
    }

    function updateUser(userData) {
      return update('users', userData).then(function(data) {
        var userToReturn = new User(data);
        return userToReturn;
      });
      // return $http.put('/api/users/' + userData._id, userData).then(getData);

      // function getData(data, status, headers, config) {
      //   var userData = data.data;
      //   var userToReturn;
      //   console.log('data returned for user update');
      //   console.log(data);
      //   console.log('data in data for user update');
      //   console.log(data.data);
      //   userToReturn = new User(userData);
      //   return userToReturn;
      // }
    }

    function updateIssue(issueData) {
      return update('issues', issueData).then(function(data) {
        var issueToReturn = new Issue(data);
        return issueToReturn;
      });
      // return $http.put('/api/issues/' + issueData._id, issueData).then(getData);

      // function getData(data, status, headers, config) {
      //   var issueData = data.data;
      //   var issueToReturn;
      //   console.log('data returned for issue update');
      //   console.log(data);
      //   console.log('data in data for issue update');
      //   console.log(data.data);
      //   issueToReturn = new Issue(issueData);
      //   return issueToReturn;
      // }
    }

    function ready() {
      // logger.info('ready');
    }
  }
})();