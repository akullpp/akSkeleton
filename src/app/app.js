(function () {
    'use strict';

    angular
        .module('ak', [
            'ak.home.ui',
            'ak.navbar.ui',
            'ak.footer.ui',
            'ui.router'
        ])
        .config(route);


    function route($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('ak', {
                abstract: true,
                url: '',
                templateUrl: 'app/app.html',
                views: {
                    'header': {
                        template: '<ak-navbar></ak-navbar>'
                    },
                    'footer': {
                        template: '<ak-footer></ak-footer>'
                    }
                }
            });
    }
})();
