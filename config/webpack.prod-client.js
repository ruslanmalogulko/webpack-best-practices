const path = require("path")
const webpack = require("webpack")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

module.exports = {
    name: "client",
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    entry: {
        vendor: ["react", "react-dom"],
        main: ["./src/main.js"]
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
        new MiniCSSExtractPlugin(),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require("cssnano"),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
        }),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
            WEBPACK: true
          }
        }),
        new CompressionPlugin({
          algorithm: "gzip"
        }),
        new BrotliPlugin()
      ]
}
