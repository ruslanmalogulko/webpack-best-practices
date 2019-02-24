const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    name: "server",
    entry: {
        server: "./src/server/render.js"
    },
    mode: "production",
    output: {
        filename: "prod-server-bundle.js",
        path: path.resolve(__dirname, "../build"),
        libraryTarget: "commonjs2"
    },
    target: "node", // default "web"
    externals: nodeExternals(),
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
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
                            name: "images/[name].[ext]",
                            emitFile: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
}
