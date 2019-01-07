const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const BrotliWebpackPlugin = require('brotli-webpack-plugin');

module.exports = {
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
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
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "markdown-with-front-matter-loader"
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            }
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
            filename: '[name].css'
        }),
        new MinifyPlugin(),
        new CompressionWebpackPlugin({
            algorithm: 'gzip'
        }),
        new BrotliWebpackPlugin()
    ]
}
