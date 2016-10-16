(function () {
    'use strict';

    angular
        .module('ak.home.ui', [
            'ak.employees.ui',
            'ak.profile.ui',
            'ui.router'
        ])
        .config(route);

    function route($stateProvider) {
        $stateProvider
            .state('ak.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'app/home/home.html'
                    }
                }
            });
    }
})();
