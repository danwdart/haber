import React from 'react';
import ReactDOM from 'react-dom';

import Foo from './components/foo';
import Contacts from './components/contacts';


const main = document.querySelector(`main`);

ReactDOM.render(
    <div>
        <Foo name="Bob">
            <p>Extra content</p>
        </Foo>
        <Contacts url="/mockdata/contacts.json" />
    </div>,
    main
);
