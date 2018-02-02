import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup as toStatic } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

import { requestContacts } from './actions/contacts';

const store = createStore(reducer, applyMiddleware(thunk)),
    node = <Provider store={store}>
        <App />
    </Provider>;

store.dispatch(requestContacts());

if (`undefined` === typeof document) {
    const out = toStatic(node);
    console.log(out);
} else {
    render(node, document.querySelector(`main`));
}
