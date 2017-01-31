var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

var vendorList = ['babel-polyfill', 'axios', 'react', 'react-dom', 'mobx', 'mobx-react']

module.exports = {
  entry: {
    script: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/entry.jsx'
      ],
    vendor: vendorList
  },
  output: {
    path: '/dist/',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: './dist',
    historyApiFallback: true,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
            },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
            },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader', 'img-loader']
            }
        ]
  },
  plugins: [
        new HtmlPlugin({
      template: './src/index.html'
    }),
      /*  new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),*/ //doesn't work with karma, will be fixed in karma v3 
        new webpack.HotModuleReplacementPlugin()
    ]
}