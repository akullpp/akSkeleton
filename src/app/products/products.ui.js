(function () {
    'use strict';

    angular
        .module('my.products.ui', [
            'my.products',
            'ngTable',
            'ui.router'
        ])
        .config(routes)
        .controller('ProductsController', ProductsController);

    function routes($stateProvider) {
        $stateProvider
            .state('my.products', {
                url: '/dashboard/products',
                templateUrl: 'app/products/products.html',
                resolve: {
                    products: function (Products) {
                        return Products.get();
                    }
                },
                controller: 'ProductsController',
                controllerAs: 'vm'
            });
    }

    function ProductsController(NgTableParams, products) {
        var vm = this;

        _.extend(vm, {
            tableParams: new NgTableParams({
                count: 10
            }, {
                data: products
            })
        });
    }
})();
