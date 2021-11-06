const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('src/index.js'),
  output: {
    // path: path.resolve('../backend/src/main/webapp/assets/js'),
    path: path.resolve('public'),
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, 
    {
      test: /\.css$/i,
      loader: [{
        loader: 'style-loader'
      }, 
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }]
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader'
      ],
    },
    {
      test: /\.(png|jpe?g|gif|mp4|ico)$/i,
      exclude: /node_modules/,
      loader: 'file-loader'
    }]
  },
  devServer: {
    // contentBase: path.resolve('../backend/src/main/webapp/assets/js'),
    contentBase: path.resolve('public'),
    host: '0.0.0.0',
    port: 8000,
    inline: true,
    liveReload: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
}