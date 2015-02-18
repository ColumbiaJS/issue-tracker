/* COMMON SERVICES */
(function () {
  'use strict';
  angular.module('app.core').factory('common', common);

  common.$inject = ['$location', '$q', '$rootScope', '$timeout', 'logger'];

  /* @ngInject */ // for ng-annotate to make app min-safe
  function common($location, $q, $rootScope, $timeout, logger) {
    /* EXPOSED FUNCTIONS */
    var service = {
      $broadcast: $broadcast,
      $q: $q,
      $timeout: $timeout,
      logger: logger,
      textContains: textContains
    };

    return service;

    /* IMPLEMENTATION DETAILS */
    function $broadcast() {
      return $rootScope.$broadcast.apply($rootScope, arguments);
    }

    function textContains(text, searchText) { // see https://github.com/johnpapa/ng-demos/blob/master/cc-bmean%2Fsrc%2Fclient%2Fapp%2Fcore%2Fcommon.js
      return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
    }
  }
})();
