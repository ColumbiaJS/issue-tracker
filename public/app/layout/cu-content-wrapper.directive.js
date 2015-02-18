(function () {
  'use strict';

  angular
    .module('app')
    .directive('cuContentWrapper', [function () {
      return {
        restrict: 'E',
        templateUrl: '/partials/layout/cu-content-wrapper.html',
        controller: 'MainCtrl',
        link: function (scope, iElement, iAttrs) {

        }
      };
    }]);
})();
