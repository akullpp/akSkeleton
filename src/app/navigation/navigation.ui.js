(function () {
    'use strict';

    angular
        .module('my.navigation.ui', [
            'my.customers.ui',
            'my.products.ui',
            'my.profile.ui'
        ])
        .controller('NavigationController', NavigationController)
        .component('myNavigation', {
            templateUrl: 'app/navigation/navigation.html',
            controller: 'NavigationController',
            controllerAs: 'vm'
        });

    function NavigationController() {
        var vm = this;

        _.extend(vm, {
            someFunction: function () {
                return 0;
            }
        });
    }
})();
