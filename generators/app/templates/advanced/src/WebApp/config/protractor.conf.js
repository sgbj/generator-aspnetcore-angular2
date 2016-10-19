require('ts-node/register');
const path = require('path');

exports.config = {
    baseUrl: 'http://localhost:3000/',
    specs: [
      path.resolve(__dirname, '../wwwroot/e2e/**/**.e2e-spec.ts'),
      path.resolve(__dirname, '../wwwroot/e2e/**/*.e2e-spec.ts')
    ],
    exclude: [],
    framework: 'jasmine2',
    allScriptsTimeout: 110000,
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 400000
    },
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },
    useAllAngular2AppRoots: true
};