(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardCtrl', function ($scope) {
      $scope.th = 'what we know';
    });

  // DashboardCtrl.$inject = ['common'];

  // function DashboardCtrl($scope) {
  //   $scope.th = 'what we know';
  // }
})();
