import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyButton from '../components/my-button';
import Contacts from '../components/contacts';
import Foo from '../components/foo';

import * as ButtonActions from '../actions/button';
import * as ContactsActions from '../actions/contacts';

const App = ({buttonPressed, timesPressed, contacts, actions}) => (
    <div>
        <Foo name="Bob">
            <p>Extra content</p>
        </Foo>
        <div>
            Pressed: {buttonPressed && `yes`}, Times pressed: {timesPressed}
        </div>
        <MyButton click={actions.pressButton} pressed={buttonPressed} times={timesPressed}>
            Press me
        </MyButton>
        <Contacts data={contacts} />
    </div>
);

App.propTypes = {
    timesPressed: PropTypes.number.isRequired,
    buttonPressed: PropTypes.bool.isRequired,
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    contacts: state.contacts,
    timesPressed: state.button.timesPressed,
    buttonPressed: state.button.buttonPressed
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({...ButtonActions, ...ContactsActions}, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
