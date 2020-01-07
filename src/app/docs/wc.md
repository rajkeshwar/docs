Dynamically register all your web-components

```js
// filename demo-component.wc.js
// All filename must have .wc.js extension 
export class DemoWcComponent extends HTMLElement {

  static get is() {
    return 'demo-wc-comp';
  }
  // ...
}

// Grab all the files which has .wc.js extension 
// Register as web component with the static property is 
const context = require.context("./", true, /\.wc\.js$/);

// Dynanically registering all the custom elements as web components
const importAllWebComponents = r => r.keys().forEach(key => {
  const [cmpClazz] = Object.values(r(key));
  if (!window.customElements.get(cmpClazz.is)) {
    window.customElements.define(cmpClazz.is, cmpClazz);
  }
});

importAllWebComponents(context);

```


```js
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './demo/demo.js'],
  output: {
    // publicPath: path.resolve(__dirname, 'assets'),
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    disableHostCheck: true,
    hot: true,
    compress: true,
    host: '127.0.0.1',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", {
          loader: "sass-loader",
          options: {
            includePaths: ["./src/assets"]
          }
        }]
      },
      {
        "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        "loader": "url-loader",
        "options": {
          "name": "[name].[hash:20].[ext]",
          "limit": 10000
        }
      },
      {
        "test": /\.(eot|svg|cur)$/,
        "loader": "file-loader",
        "options": {
          "name": "[name].[hash:20].[ext]",
          "limit": 10000
        }
      },
      {
        test: /\.js$/,
        exclude: /\bcore-js\b/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false,
                  targets: {
                    browsers: ['last 1 version', 'ie >= 11']
                  },
                  useBuiltIns: 'usage'
                }
              ]
            ],
            plugins: [
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Web Components',
      template: './demo/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        "context": "src",
        "to": "",
        "from": {
          "glob": "assets/**/*",
          "dot": true
        }
      },
      {
        "context": "src",
        "to": "",
        "from": {
          "glob": "components/**/*.md",
          "dot": true
        }
      },
      {
        "context": "demo",
        "to": "",
        "from": {
          "glob": "favicon.ico",
          "dot": true
        }
      }
    ], {
      "ignore": [
        ".gitkeep",
        "**/.DS_Store",
        "**/Thumbs.db"
      ],
      "debug": "warning"
    })
  ]
};
```

Package.json

```json
"devDependencies": {
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.6",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-syntax-import-meta": "^7.2.0",
    "@babel/plugin-transform-runtime": "^7.4.4",
    "@babel/polyfill": "^7.4.4",
    "@babel/runtime": "^7.4.5",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.0.6",
    "copy-webpack-plugin": "^4.6.0",
    "css-loader": "^2.1.0",
    "html-webpack-plugin": "^4.0.0-beta.5",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1",
    "webpack-dev-server": "^3.1.14"
  },
  "dependencies": {
    "@webcomponents/webcomponentsjs": "^2.4.0",
    "core-js": "^2.6.9",
    "file-loader": "^3.0.1",
    "font-awesome": "^4.7.0",
    "g2p-base": "^1.7.0",
    "html-element": "^2.3.0",
    "lit-element": "^2.2.1",
    "lit-html": "^1.1.2",
    "marked": "^0.6.1",
    "primeicons": "^1.0.0",
    "prismjs-loader": "0.0.4",
    "url-loader": "^1.1.2"
  }
  
````

index.html

```html
<head>
  <meta charset="utf-8" />
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
  <link rel="stylesheet" href="assets/prettify/prettify.css">
  <script type="text/javascript" src="assets/prettify/prettify.js"></script>
  <script src="node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"></script>
  <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
</head>
```
