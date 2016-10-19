module.exports = function (config) {
    var webpackConfig = require('./webpack.test.js');

    var configuration = {
        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        files: [{ pattern: './config/test.js', watched: false }],
        preprocessors: {
            './config/test.js': ['coverage', 'webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        coverageReporter: {
            type: 'in-memory'
        },
        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'
        },
        webpackMiddleware: { stats: 'errors-only', noInfo: true },
        reporters: ['mocha', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [
          'PhantomJS'
        ],
        customLaunchers: {
            ChromeTravisCi: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        singleRun: true
    };

    if (process.env.TRAVIS) {
        configuration.browsers = [
          'ChromeTravisCi',
          'PhantomJS'
        ];
    }

    config.set(configuration);
};