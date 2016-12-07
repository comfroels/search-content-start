const plugins = require('./webpack/plugins');

module.exports = (config) => {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine', 
            'karma-webpack',
            'karma-coverage',
            'karma-remap-istanbul',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        files: [
            {pattern: 'dist/polyfill.bundle.js', included: true, watched: true},

            {pattern: 'dist/bootstrap.bundle.js', included: true, watched: true},

            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false}

        ],

        webpack: {
            
        },

        port: 9876,
 
        logLevel: config.LOG_INFO,
 
        colors: true,
 
        autoWatch: true,
 
        browsers: ['Chrome'],

        reporters: ['progress', 'dots', 'coverage'],

        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },
 
        singleRun: true

    })
}