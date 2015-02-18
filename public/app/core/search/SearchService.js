(function () {
  'use strict';

  angular.module('app.core').factory('SearchService', ['$q','WebSuggestService', function($q, wf){
    return{
      getSuggestions : function(query){
        console.log('get suggestions');
        var maxWebSuggest = 4;

        var pWeb = wf.getWebSuggestions(query, maxWebSuggest);
  //      var p_bookmark = []; // bf.getSearchResults(query, maxBookmarkSuggest);
  //      var p_history = []; // hf.getSearchResults({text: query, maxResults: maxHistorySuggest});

        // when all the suggestions part are loaded we merge into one array
        return $q.all([pWeb]).then(function(arrays){
          // the first element is always the typed query
          var allSuggest = [{
            type: 'web',
            icon: 'fa-search', // class for font-awesome icons (only show the first)
            label: query
          }];
          // then we concatenate with other suggestions
          for(var i in arrays){
            allSuggest = allSuggest.concat(arrays[i]);
          }
          return allSuggest;
        });
      }
    };

  }]);

})();
