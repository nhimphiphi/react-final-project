const webpack = require('webpack');

const config = {
  devtool: 'eval-source-map',
  entry: './app/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './public',
    port: 5000,
    colors: true,
    inline: true,
    hot: true,
    historyApiFallback: true
  }
};

//TODO: add config for PROD env

module.exports = config;
