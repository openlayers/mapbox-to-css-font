const path = require('path');

module.exports = function (karma) {
  karma.set({
    frameworks: ['mocha'],
    files: [
      {
        pattern: path.resolve(__dirname, './index.test.js'),
      },
    ],
    preprocessors: {
      '**/*.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
    },
    browsers: ['ChromeHeadless'],
  });
};
