(function() {
  'use strict';

  var appCore = angular.module('app.core');
  appCore.directive('lvAuthWidget', lvAuthWidget);

  function lvAuthWidget() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: '/partials/core/auth/auth-widget.html',
      controller: 'AuthCtrl'
    };
  }


}());