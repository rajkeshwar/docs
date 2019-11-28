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


Packages required
```json
"@types/chai": "^4.0.1",
"@types/mocha": "^2.2.41",
"chai": "^4.0.2",
"html-webpack-plugin": "^3.2.0",
"mocha": "^3.4.2",
"ts-loader": "^6.2.1",
"tslint": "^5.7.0",
"typedoc": "^0.8.0",
"typescript": "^2.9.2",
"uglify-es": "^3.0.27",
"web-component-tester": "^6.0.1",
"webpack": "^4.41.2",
"webpack-cli": "^3.3.10",
"webpack-dev-server": "^3.9.0"
````

index.html file
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
