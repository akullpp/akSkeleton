(function () {
    'use strict';

    angular
        .module('my.user', [])
        .constant('USER_URL', '/api/user')
        .factory('User', User);

    function User($http, USER_URL) {
        return {
            get: function () {
                return $http.get(USER_URL)
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    }
})();
