const path = require("path");
const webpack = require("webpack");
const commonConfig = require('./webpack.common');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    ...commonConfig,
    entry: {
        main: [
            "@babel/runtime/regenerator",
            "react-hot-loader/patch",
            "@babel/register",
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
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.ejs',
            title: 'Links journal'
        }),
        new BundleAnalyzerPlugin({
            generateStatsFile: true
        })
    ]
}
