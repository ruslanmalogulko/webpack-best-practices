require('@babel/runtime/regenerator');
require('react-hot-loader/patch');
require('@babel/register');
require('./index.html');
require("webpack-hot-middleware/client?reload=true");
require('./main.styl');
require('./app');

var a = async(args) => {
    const { a, b } = args;
    await console.log("Hello from the future", a, b);
}
a({ a: 1, b: 2 });