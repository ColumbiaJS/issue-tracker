(function() {
  'use strict';

  var appCore = angular.module('app.core');

  appCore.factory('User', function($http) {
    var apiEndpoint = '/api/users/';
    function User(userData) {
      if (userData) {
        this.setData(userData);
      }
    }

    User.prototype = {
      setData: function(userData) {
        angular.extend(this, userData);
      },
      delete: function() {
        $http.delete(apiEndpoint + this._id);
      },
      update: function() {
        $http.put(apiEndpoint + this._id, this);
      },
      isAdmin: function() {
        return this.role === 'admin';
      },
      isAuthorizedAs: function(role) {
        return this.role === role;
      }

    };

    return User;
  });
}());