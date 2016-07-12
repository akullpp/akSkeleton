(function () {
    'use strict';

    angular
        .module('my.customers', [])
        .constant('CUSTOMERS_URL', '/api/customers')
        .factory('Customers', Customers);

    function Customers($http, CUSTOMERS_URL) {
        return {
            get: function () {
                return $http.get(CUSTOMERS_URL)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    }
})();
