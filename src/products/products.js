(function() {

  angular.module('leagueItemsApp')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['ProductMachine'];

  function ProductController(ProductMachine) {
    this.products = ProductMachine.products;
    ProductMachine.getAllProducts();
  }

})();
