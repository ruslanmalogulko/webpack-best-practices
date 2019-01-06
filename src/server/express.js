const express = require('express');
const path = require('path');
var expressStaticGzip = require("express-static-gzip");

const server = express();

const webpack = require("webpack");
const isProd = process.env.NODE_ENV === 'production';
const config = require(`../../config/webpack.${isProd ? 'prod' : 'dev'}`);
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(
    compiler
);

if (!isProd) {
    const staticMiddleware = express.static("dist");

    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);
    server.use(staticMiddleware);
} else {
    server.use(expressStaticGzip('dist'));
}

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})