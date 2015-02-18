(function () {
  'use strict';

  function lvSearchBar () {
    return {
      restrict: 'E',
      templateUrl: '/partials/core/search/search-bar.html',
      controller: 'SearchCtrl'
    };
  }

  angular.module('app.core').directive('lvSearchBar', lvSearchBar);

})();
