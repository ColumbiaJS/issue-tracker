(function() {
  'use strict';

  var appCore = angular.module('app.core');
  appCore.controller('AuthCtrl', function($scope, $log, $auth, IdentityService, ngDialog, logger) {

    $scope.isAdmin = IdentityService.isAdmin;
    $scope.isAuthenticated = IdentityService.isAuthenticated;
    $scope.getCurrentUser = IdentityService.getCurrentUser;
    $scope.currentUser = IdentityService.currentUser;

    $scope.displaySignup = function() {
      ngDialog.open({
        template: '/partials/core/auth/signup.html',
        className: 'ngdialog-theme-lv',
        controller: 'SignupCtrl',
        scope: $scope
      });
    };

    $scope.displayLogin = function() {
      ngDialog.open({
        template: '/partials/core/auth/login.html',
        className: 'ngdialog-theme-lv',
        controller: 'LoginCtrl',
        scope: $scope
      });
    };

    $scope.logout = function() {
      $auth.logout()
        .then(function() {
          IdentityService.logoutCurrentUser();
          logger.info('You have successfully logged out', {}, 'Logout');
        });
    };
  });
}());
