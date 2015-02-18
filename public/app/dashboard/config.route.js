(function () {
  'use strict';

  var appDashboard = angular.module('app.dashboard');

  appDashboard.config(function ($locationProvider, $routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: '/partials/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  });

  appDashboard.run(function Run($auth, $log, IdentityService) {
    console.log('running app');
  });
})();
