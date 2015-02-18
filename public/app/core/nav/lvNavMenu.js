(function () {
  'use strict';

  function lvNavMenu () {
    return {
      restrict: 'E',
      templateUrl: '/partials/core/nav/nav-menu.html'
    };
  }

  angular.module('app.core').directive('lvNavMenu', lvNavMenu);

})();
