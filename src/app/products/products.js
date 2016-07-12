(function () {
    'use strict';

    angular
        .module('my.products', [])
        .constant('PRODUCTS_URL', '/api/products')
        .factory('Products', Products);

    function Products($http, PRODUCTS_URL) {
        return {
            get: function () {
                return $http.get(PRODUCTS_URL)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    }
})();
