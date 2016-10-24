(function() {

  angular.module('leagueItemsApp')
    .service('ProductMachine', ProductMachine);

  const productUrl = 'http://ddragon.leagueoflegends.com/cdn/6.21.1/data/en_US/item.json';

  ProductMachine.$inject = ['$http'];

  function ProductMachine($http) {
    this.products = {};

    this.getAllProducts = () => {
      return $http.get(productUrl)
        .then((data) => {
          this.products.data = data.data.data;
        });
    };
  }

})();
