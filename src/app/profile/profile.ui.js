(function () {
    'use strict';

    angular
        .module('ak.profile.ui', [
            'ak.datatypes',
            'ngMessages',
            'ui.router'
        ])
        .config(route)
        .controller('ProfileController', ProfileController);

    function route($stateProvider) {
        $stateProvider
            .state('ak.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'app/profile/profile.html',
                        controller: 'ProfileController',
                        controllerAs: 'vm'
                    }
                }
            });
    }

    function ProfileController() {
        var vm = this;

        _.extend(vm, {
            change: function () {
                console.log('User: ', vm.user);
            }
        });
    }
})();
