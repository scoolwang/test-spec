// Karma configuration
// Generated on Mon Mar 23 2015 15:05:36 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['mocha','chai'],
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'http://assets.spmjs.org/seajs/??seajs/2.1.0/sea.js',
      
      'bower_components/angular/angular.js',
      'node_modules/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js', 
      // 'webapp/resources/epm/jquery/**/jquery.js',
      // 'config/*.js',
      
      'testjs/test.js',
      'testfile/test.js',
      // 'webapp/resources/view/src/login.js',
      'test-main.js'
    ],


    // list of files to exclude
    exclude: [
        // 'seajs/Owasp.CsrfGuard.js',
        'epm/**/**/highcharts-ng-debug.js',
        'epm/**/**/epm-angular-debug.js',
        'ngjs/restangular.js',
        // 'ngjs/app/siteapp.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
