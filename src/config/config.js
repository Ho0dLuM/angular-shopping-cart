(function() {

  'use strict';

  angular.module('leagueItemsApp')
    .config(['$routeProvider', routes]);

  function routes($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'ProductPageController',
      controllerAs: 'PPC',
      templateUrl: 'productpage/productpage.html'
    });
  }

})();
