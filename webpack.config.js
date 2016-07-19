var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, '/public');

module.exports = {
  devtool: 'eval-source-map',

  entry: APP_DIR + '/app/App.js',
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  devServer: {
    contentBase: "./public",
<<<<<<< HEAD
    port: 5000,
=======
    port: 7000,
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
    colors: true,
    historyApiFallback: true,
    inline: true
  } 
}