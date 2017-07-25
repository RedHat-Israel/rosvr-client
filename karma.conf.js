// Karma configuration
// Generated on Tue Jul 25 2017 11:56:57 GMT+0300 (IDT)
var webpackConfig = require('./webpack.config.js')
var jasmineConfig = require('./jasmine.json')

module.exports = function(config) {
	config.set({

		// Add any browsers here
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		files: ['**/*.test.js'],

		// The entry point for our test suite
		basePath: 'src',
		autoWatch: false,
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'**/*.test.js': ['webpack', 'sourcemap']
		},
		webpack: webpackConfig,

		client: {
			// log console output in our test console
			captureConsole: true,
			jasmine: jasmineConfig
		},

		reporters: ['dots'],
		singleRun: true, // exit after tests have completed

		webpackMiddleware: {
			noInfo: true
		},

		failOnEmptyTestSuite: false,

		// Webpack takes a little while to compile -- this manifests as a really
		// long load time while webpack blocks on serving the request.
		browserNoActivityTimeout: 60000, // 60 seconds

	})
}
