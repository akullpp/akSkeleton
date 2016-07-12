'use strict';

module.exports = {
    moduleName: 'my',
    consts: {
        webserver: {
            port: 5000,
            proxies: [
                {source: '/api/', target: 'http://localhost:4000/api/'}
            ]
        }
    }
};
