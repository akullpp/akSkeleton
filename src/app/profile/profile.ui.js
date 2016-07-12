(function () {
    'use strict';

    angular
        .module('my.profile.ui', [
            'my.datatypes',
            'my.user',
            'ngMessages',
            'ui.router'
        ])
        .config(routes)
        .controller('ProfileController', ProfileController);

    function routes($stateProvider) {
        $stateProvider
            .state('my.profile', {
                url: '/profile',
                templateUrl: 'app/profile/profile.html',
                resolve: {
                    user: function ($http, User) {
                        return User.get();
                    }
                },
                controller: 'ProfileController',
                controllerAs: 'vm'
            });
    }

    function ProfileController(user) {
        var vm = this;

        _.extend(vm, {
            user: user
        });
    }
})();
