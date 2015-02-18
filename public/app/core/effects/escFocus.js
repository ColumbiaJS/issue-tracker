(function () {
  'use strict';

  angular.module('app.core').directive('escfocus', escFocus);

  function escFocus() {
    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {
        elem.bind('keyup', function (e) {
          // esc
          if (e.keyCode === 27) {
            if(!scope.$first) {
              elem[0].blur();
            }
          }
        });
      }
    };
  }

})();
