const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: {
        server: [
            "./src/server/main.js"
        ]
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, "../build")
    },
    mode: "production",
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
    }
}
