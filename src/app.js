import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppRoot from './components/appRoot';
import data from '../data/bio';

function render(Component) {
    hydrate(
        <AppContainer>
            <Component heading={data.heading} bio={data.bioText} />
        </AppContainer>,
        document.getElementById('react-root')
    );
}

render(AppRoot);

if (module.hot) {
    module.hot.accept('./components/appRoot.js', () => {
        const NewAppRoot = require('./components/appRoot.js').default;
        render(NewAppRoot);
    })
}
