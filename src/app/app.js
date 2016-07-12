(function () {
    'use strict';

    angular
        .module('my', [
            'my.customers.ui',
            'my.navigation.ui',
            'ui.router'
        ])
        .config(routes);

    function routes($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/dashboard/customers');

        $stateProvider
            .state('my', {
                template: '<ui-view></ui-view>',
                abstract: true
            });
    }
})();
