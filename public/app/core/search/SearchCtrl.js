(function () {
  'use strict';

  // CardboardCtrl = main controller with settings & header
  angular.module('app.core').controller('SearchCtrl', ['$scope', '$location', 'SearchService', function($scope, $location, SearchService){
    var searchEngine = 'https://encrypted.google.com/search?q=';
    $scope.goTo = function(url){
  //    chrome.tabs.update({url:url});
    };
    $scope.suggestions = function(input){
      // suggestions for typeahead
      return SearchService.getSuggestions(input);
    };
    $scope.onSelect = function (item) {
      console.log('select');
      this.search();
    };
    $scope.search = function(){
      console.log('process search');
      // Process the google search
      if(this.query && this.query.length>0){
        this.isLoading = true;
        this.goTo(searchEngine + this.query);
      }
    };
  }]);
})();
