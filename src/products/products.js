(function() {

  angular.module('leagueItemsApp')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['ProductMachine'];

  function ProductController(ProductMachine) {
    this.products = [];

    ProductMachine.getAllProducts()
    .then((data) => {
      this.products = data.data.data;
      console.log(this.products);
    });

  }

})();
