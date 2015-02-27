(function () {
  'use strict';

  angular.module('app.core')
    .directive('expandingSearch', expandingSearch);

  function expandingSearch() {
    return {
      restrict: 'EA',
      templateUrl: '/partials/components/search/expanding-search.html',
      scope: {
        searchText: '='
      }
    };
  }
})();
