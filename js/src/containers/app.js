import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyButton from '../components/my-button';
import Contacts from '../components/contacts';
import Foo from '../components/foo';

import * as ButtonActions from '../actions/button';

const App = ({stuff, actions}) => (
    <div>
        <Foo name="Bob" stuff={stuff}>
            <p>Extra content</p>
        </Foo>
        <MyButton click={actions.clickButton} actions={actions}>Press me and admire the glory</MyButton>
        <Contacts url="/mockdata/contacts.json" />
    </div>
);

App.propTypes = {
    stuff: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stuff: state.todos
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ButtonActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
