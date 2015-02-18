(function () {
  'use strict';

  angular.module('app.core')
    .factory('AccountService', function($http, $auth) {
      return {
        getProfile: function() {
          return $http.get('/api/users/me');
        },
        updateProfile: function(profileData) {
          return $http.put('/api/users/me', profileData).success(function(data) {
            $auth.updateToken(data.token);
          });
        }
      };
    });

})();
