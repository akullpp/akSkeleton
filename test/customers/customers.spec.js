(function () {
    'use strict';

    var expect = chai.expect;

    describe('Customers', function () {
        beforeEach(module('my.customers'));

        var Customers;
        beforeEach(inject(function (_Customers_) {
            Customers = _Customers_;
        }));

        it('should be stubbable', function () {
            sinon
                .stub(Customers, 'get')
                .returns(1);

            var result = Customers.get();

            expect(result).to.equal(1);
        });
    });
})();
