(function() {

  angular.module('leagueItemsApp')
    .directive('cdItems', ProductDirective);

  ProductDirective.$inject = [];

  function ProductDirective() {
    return {
      restrict: 'AE',
      controller: 'ProductController',
      controllerAs: 'vm',
      templateUrl: './products/products.html'
    };
  }

})();
