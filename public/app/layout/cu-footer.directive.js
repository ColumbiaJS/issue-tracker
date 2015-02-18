(function () {
  'use strict';

  angular
    .module('app')
    .directive('cuFooter', cuFooter);

  function cuFooter() {
    return {
      // E stands for Element
      // A stands for Attribute
      restrict: 'E',
      scope: {},
      template: '<footer class="footer text-center">' +
                ' <div class="container-fluid text-center">' +
                '   &copy: 2014 This is the footer' +
                ' </div>' +
                '</footer>'
    };
  }
})();
