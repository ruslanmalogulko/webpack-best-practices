## WEBPACK DEV SERVER

To transpile everything on the server side at the start of server/main.js should be imported
`require('babel-register')`
To populate static serving in express should be imported express.static and added as a middleware

```javascript
const staticMiddleware = express.static("dist");
server.use(staticMiddleware);
```

For hot reloading:

```javascript
const wepback = require("webpack");
const config = require("../../config/webpack.dev.js");
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware)(
    compiler,
    config.devServer
);
server.use(webpackDevMiddleware);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackHotMiddleware);

// static middleware should come right after these two middlewares (not before!)
```

In webpack config should be imported webpack package. In devServer `hot: true`.
In modules section should be added:
`webpack.hotModuleReplacementPlugin()`.
In main.js should be added requirement:
`require('webpack-hot-middleware/client)`;

To restart server content as well on changes, should be added:
`dev: nodemon --watch config --watch src/server src/server/main.js`

## REACT HOT RELOADING

`npm i react-hot-loader`
`import { appContainer } from 'react-hot-loader'` in app.js module
`module.hot.accept` definition which modules to accept to HMR (example './counter.js')
add `react-hot-loader/babel` into the `.babelrc` plugins section
add `require('react-hot-loader/patch') into the main.js to maintain internal state with HMR

## AUTOPREFIXER

`npm i postcss postcss-loader`

```js
// add appropriate loader to selected style files test
test: /\.styl$/,
user: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "postcss-loader" },
    { loader: "stylus-loader" }
]

```

add `postcss.config.js` file with appropriate config
and add content:

```js
module.exports = {
    plugins: [require("autoprefixer")]
}
```

## PRODUCTION WITH HEROKU

first we need install `heroku-cli`:

```bash
brew install heroku/brew/heroku
```

all configuration will be stored in `Procfile`.
Add `prod` script to package.json file:

```js
"prod": "NODE_ENV=production node src/server/main.js"
```

To create new heroku application:

```bash
heroku create
```

To add something to heroku config:

```bash
heroku config:set NODE_ENV=production
```

To view exising heroku config

```bash
heroku config
```

## CSS PERFORMANCE
Instanll `mini-css-extract-plugin` which extacts css from each js which requires css.
In `webpack.config.prod` file:

```js
{
    test: /\.styl$/,
    use: [
        { loader: MiniCSSExtractPlugin.loader },
        { loader: "css-loader" },
        { loader: "postcss-loader" },
        { loader: "stylus-loader" }
    ]
},
```

and `new MiniCSSExtractPlugin(),` should be listed in plugins section. As an option it could be passed `filename` like`: `"[name]-[contenthash].css"`
To minify content of css `optimize-css-assets-webpack-plugin` should be installed

## JS minification

`npm i babel-minify babel-minify-webpack-plugin`
and add minify plugin to `webpack.prod.js`.
There is a competition between UglifyJS and BabelMinify. So, it makes sense to try also:
`npm i uglifyjs-webpack-plugin`. But it has troubles with support es6 compilation. Official docs recomment to use
babel-minify instead.

## GZIP compression

In order to supply proper compression it should be defined like:

```js
const CompressionWebpackPlugin = require('compression-webpack-plugin');
...
plugins: [
    new CompressionWebpackPlugin({
        algorithm: 'gzip'
    })
]
```

Unfortunately for now Heroku doesn't support compression. So, it should be defined in Express with

```js
var expressStaticGzip = require("express-static-gzip");
server.use(expressStaticGzip('dist'));
```