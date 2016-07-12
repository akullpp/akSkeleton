(function () {
    'use strict';

    angular
        .module('my.customers.ui', [
            'my.customers',
            'ngTable',
            'ui.router'
        ])
        .config(routes)
        .controller('CustomersController', CustomersController);

    function routes($stateProvider) {
        $stateProvider
            .state('my.customers', {
                url: '/dashboard/customers',
                templateUrl: 'app/customers/customers.html',
                resolve: {
                    customers: function (Customers) {
                        return Customers.get();
                    }
                },
                controller: 'CustomersController',
                controllerAs: 'vm'
            });
    }

    function CustomersController(NgTableParams, customers) {
        var vm = this;

        _.extend(vm, {
            tableParams: new NgTableParams({
                count: 10
            }, {
                data: customers
            })
        });
    }
})();
