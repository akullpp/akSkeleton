(function () {
    'use strict';

    angular
        .module('ak.datatypes.text.ui', [
        ])
        .constant('TEXT_REGEX', /^[a-zA-Z]+$/)
        .directive('akText', akText);

    function akText(TEXT_REGEX) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$validators.akText = function (modelValue, viewValue) {
                    var value = modelValue || viewValue;

                    if (ctrl.$isEmpty(value)) {
                        return true;
                    }
                    return TEXT_REGEX.test(value);
                };
            }
        };
    }
})();
