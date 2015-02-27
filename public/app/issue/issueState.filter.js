(function () {
  'use strict';

  angular
    .module('app.issue')
    .filter('issueState', function() {
      return function (items, status) {
        if (status) {
          if (status.value === '$') { return items; }
          var filtered = [];
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            // if (item.state.auth.issueState === status.value) {
            if (item.state === status.value) {
              filtered.push(item);
            }
          }
          return filtered;
        }
      };
    });
})();
