import express from "express";
import path from "path";

const server = express();

const webpack = require("webpack");
const config = require(`../../config/webpack.${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}`);
const compiler = webpack(config);
const staticMiddleware = express.static("dist");
const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(
    compiler
);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);
server.use(staticMiddleware);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})