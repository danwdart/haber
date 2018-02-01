import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app';
import reducer from './reducers/index';

const store = createStore(reducer);

const main = document.querySelector(`main`);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    main
);
