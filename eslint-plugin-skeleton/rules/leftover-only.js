'use strict';

module.exports = function (context) {
    return {
        CallExpression: function (node) {
            var callee = node.callee;

            if (callee.type === 'MemberExpression' && callee.property.name === 'only') {
                context.report(node, 'Leftover .only() detected');
            }
        }
    };
};
