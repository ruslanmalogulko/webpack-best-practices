// require('./index.html');
require('./main.styl');
require('./app');

var a = async(args) => {
    const { a, b } = args;
    await console.log("Hello from the future", a, b);
}
a({ a: 1, b: 2 });