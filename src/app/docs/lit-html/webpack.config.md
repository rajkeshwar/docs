```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./demo/app.ts'],
  resolve: {
    modules: [path.resolve(__dirname, './node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: '127.0.0.1',
    port: '8080',
    hot: true,
    compress: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ]
};
```
