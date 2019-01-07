const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = {
    ...commonConfig,
    entry: {
        main: [
            "webpack-hot-middleware/client?reload=true",
            "./src/main.js"
        ]
    },
    mode: "development",
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "stylus-loader" }
                ]
            },
            ...commonConfig.module.rules
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.ejs',
            title: 'Links journal'
        })
    ]
}
