(function () {
    'use strict';

    var expect = chai.expect;

    describe('Datatype: Text', function () {
        beforeEach(module('ak.datatypes.text.ui'));

        var scope;
        beforeEach(inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();

            $compile([
                '<form name="form">',
                    '<input name="input" ng-model="text" ak-text>',
                '</form>'
            ].join())(scope);
            scope.$digest();
        }));

        _.forEach([
            'a',
            'A',
            'Aaa'
        ], function (value) {
            it('should be valid for \'' + value + '\'', function () {
                scope.$apply(function () {
                    scope.form.input.$setViewValue(value);
                });

                expect(scope.form.$valid).to.be.true;
            });
        });

        _.forEach([
            '!',
            'ä',
            '1'
        ], function (value) {
            it('should be invalid for \'' + value + '\'', function () {
                scope.$apply(function () {
                    scope.form.input.$setViewValue(value);
                });

                expect(scope.form.$valid).to.be.false;
            });
        });
    });
})();
