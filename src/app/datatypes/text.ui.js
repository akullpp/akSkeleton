(function () {
    'use strict';

    angular
        .module('my.datatypes.text.ui', [
        ])
        .constant('TEXT_REGEX', /^\w+$/)
        .directive('myText', myText);

    function myText(TEXT_REGEX) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                ctrl.$validators.myText = function (modelValue, viewValue) {
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
