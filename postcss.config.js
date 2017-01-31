var autoprefixer = require('autoprefixer');
var clean = require('postcss-clean');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 5 versions']
    }),
    clean()
  ]
};
