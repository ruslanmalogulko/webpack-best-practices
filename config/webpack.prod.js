const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BrotliWebpackPlugin = require('brotli-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = {
    ...commonConfig,
    entry: {
        main: [
            "./src/main.js"
        ]
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    { loader: MiniCSSExtractPlugin.loader },
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
        new OptimizeCssAssetsPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCSSExtractPlugin({
            filename: '[name]-[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.ejs',
            title: 'Links journal'
        }),
        new MinifyPlugin(),
        new CompressionWebpackPlugin({
            algorithm: 'gzip'
        }),
        new BrotliWebpackPlugin()
    ]
}
