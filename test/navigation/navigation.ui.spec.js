(function () {
    'use strict';

    var expect = chai.expect;

    describe('myNavigation directive', function () {
        beforeEach(module('my.navigation.ui'));

        var element;
        var controller;
        var scope;
        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();

            element = $compile('<my-navigation></my-navigation>')(scope);

            scope.$digest();

            controller = element.controller('myNavigation');
        }));

        describe('controller', function () {
            describe('someFunction', function () {
                it('should return 0', function () {

                    var result = controller.someFunction();

                    expect(result).to.equal(0);
                });
            });
        });
    });
})();
