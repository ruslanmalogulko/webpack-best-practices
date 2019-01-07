const express = require('express');
var expressStaticGzip = require("express-static-gzip");
const React = require('react');
const ReactDomServer = require('react-dom/server');
import AppRoot from '../components/appRoot';

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
    server.use(expressStaticGzip('dist', {
        enableBrotli: true,
        orderPreference: ['br']
    }));
}

server.get('*', (req,res) => {
    res.send(`
    <html>
        <head>
            <link href="/main.css" rel="stylesheet" />
            <title>Hello title !!!</title>
        </head>
        <body>
            <div id="react-root">
                ${ReactDomServer.renderToString(<AppRoot />)}
            </div>
            <script src="vendors~main-bundle.js"></script>
            <script src="main-bundle.js"></script>
        </body>
    </html>
    `);
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})