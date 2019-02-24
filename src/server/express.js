const express = require('express');
var expressStaticGzip = require("express-static-gzip");
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const server = express();

const webpack = require("webpack");
const isProd = process.env.NODE_ENV === 'production';

const configClient = require(`../../config/webpack.${isProd ? 'prod' : 'dev'}-client`);
const configServer = require(`../../config/webpack.${isProd ? 'prod' : 'dev'}-server`);
const compiler = webpack([configClient, configServer]);
const [clientCompiler, serverCompiler] = compiler.compilers;

if (!isProd) {
    const webpackDevMiddleware = require("webpack-dev-middleware")(
        compiler,
        configClient.devServer
    );
    const webpackHotMiddleware = require("webpack-hot-middleware")(
        clientCompiler,
        configClient.devServer
    );

    server.use(webpackDevMiddleware);
    server.use(webpackHotMiddleware);
    server.use(webpackHotServerMiddleware(compiler));
} else {
    webpack([ configClient, configServer ]).run((err, stats) => {
        if (err) {
            console.log(err);
        }
        const render = require('../../build/prod-server-bundle.js').default;

        server.use(expressStaticGzip('dist', {
            enableBrotli: true,
            orderPreference: ['br']
        }));

        server.get('*', render())
    })
}

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
