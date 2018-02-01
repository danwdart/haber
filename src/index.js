import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup as toStatic } from 'react-dom/server';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app';
import reducer from './reducers/index';

const store = createStore(reducer),
    node = <Provider store={store}>
        <App />
    </Provider>;

if (`undefined` === typeof document) {
    const out = toStatic(node);
    console.log(out);
} else {
    render(node, document.querySelector(`main`));
}
