var webpackConfig = require('./webpack.config.development');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    files: [
            'test/**/*.test.js',
        ],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
    },
    webpack: webpackConfig
  })
}