const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    name: "server",
    entry: {
        server: "./src/server/render.js"
    },
    output: {
        filename: 'dev-server-bundle.js',
        path: path.resolve(__dirname, "../build")
    },
    mode: "production",
    target: "node", // default "web"
    externals: nodeExternals(), // this would extend webpack functionality for node
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
