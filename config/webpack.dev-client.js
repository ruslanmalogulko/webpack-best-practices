const path = require("path");
const webpack = require("webpack");

const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    name: "client",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
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
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new BundleAnalyzerPlugin({
        //     generateStatsFile: true
        // }),
        new HTMLWebpackPlugin({
            template: './src/index.ejs',
            title: 'Hello test'
        })
    ]
}
