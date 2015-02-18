(function() {
  'use strict';

  var appCore = angular.module('app.core');

  appCore.factory('IdentityService', function(User, $http, $q, $log, $auth) {
    var currentUser = {},
        endpoint = '/api/users/me';

    return {
      currentUser: function() {
        return currentUser;
      },
      getCurrentUser: getCurrentUser,
      updateCurrentUser: updateCurrentUser,
      logoutCurrentUser: logoutCurrentUser,
      isAuthenticated: isAuthenticated,
      isAdmin: isAdmin
    };

    function getCurrentUser() {
      var deferred = $q.defer();

      if (currentUser.hasOwnProperty('role') || !$auth.isAuthenticated()) {
        deferred.resolve(currentUser);
      } else {
        $http.get(endpoint)
          .success(function(data) {
            currentUser = new User();
            angular.extend(currentUser, data);
            $log.info('current user is now set');
            $log.info(currentUser);
            deferred.resolve(currentUser);
          })
          .error(function(data, status, headers, config) {
            $log.warn('user is not authenticated and not set');
            currentUser = {};
            $log.warn(data, status, headers, config);
            deferred.reject(data);
          });
      }
      return deferred.promise;
    }

    function updateCurrentUser(accountData) {
      if (currentUser.hasOwnProperty('role')) {
        $http.put(endpoint, accountData);
      }
    }

    function logoutCurrentUser() {
      currentUser = {};
    }

    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    function isAdmin() {
      if (isAuthenticated()) {
        return currentUser.hasOwnProperty('role') && currentUser.role === 'admin';
      } else {
        return false;
      }
    }

  });
}());
