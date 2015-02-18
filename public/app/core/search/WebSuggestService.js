(function () {
  'use strict';

  // WebFactory
  angular.module('app.core').factory('WebSuggestService', ['$http','$q', function($http, $q){
    return{
      getWebSuggestions : function(query, max){
        var deferred = $q.defer();
        console.log('getWebSuggestions');
        console.log('calling jsonp');
        var url = 'https://suggestqueries.google.com/complete/search?client=firefox&hl=en&callback=?';
        var responsePromise = $http.jsonp( url,
          { params : {
            'jsonp':'JSON_CALLBACK',  // jsonp callback function name
            'q': query                // query term
          }
          }
        );

        responsePromise.success(function(suggestions) {
          // the [0] is the query, the [1] is the suggestions
          var webSuggestions = [];
          console.log(suggestions);
          console.log(suggestions.length);
          console.log(suggestions[1].length);
          console.log('web suggestions empty');
          for(var i=0; i<max; i++){
            if(suggestions[1][i]) {
              console.log(suggestions[1][i]);
              webSuggestions.push({
                type: 'web',
                icon: 'fa-search blank',
                label: suggestions[1][i]
              });
            }
          }
          deferred.resolve(webSuggestions);
        });

        return deferred.promise;

      }
    };
  }]);

})();
