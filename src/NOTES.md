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