const React = require('react');
const { renderToString } = require('react-dom/server');
const AppRoot = require('../components/appRoot').default;

export default () => (req, res) => {
    res.send(`
    <html>
        <head>
            <link href="/main.css" rel="stylesheet" />
            <title>Hello there</title>
        </head>
        <body>
            <div id="react-root">
                ${renderToString(<AppRoot />)}
            </div>
            <script src="vendors~main-bundle.js"></script>
            <script src="main-bundle.js"></script>
        </body>
    </html>
    `);
}
