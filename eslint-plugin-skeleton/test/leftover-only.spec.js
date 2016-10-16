'use strict';

var rule = require('../rules/leftover-only');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();

ruleTester.run('leftover-only', rule, {
    valid: [
        'function only() {}'
    ],
    invalid: [
        {
            code: 'it.only()',
            errors: [{message: 'Leftover .only() detected'}]
        }
    ]
});
