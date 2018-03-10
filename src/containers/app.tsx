import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyButton from '../components/my-button';
import Contacts from '../components/contacts';
import Foo from '../components/foo';
import {Contact} from '../types/contact';
import {Action} from '../types/action';

import * as ButtonActions from '../actions/button';
import * as ContactsActions from '../actions/contacts';

type AppProps = {
  timesPressed: number,
  buttonPressed: boolean,
  contacts: Contact[],
  actions: Action
}

const App = (props: AppProps) => (
  <div>
    <Foo name="Bob">
      <p>Extra content</p>
    </Foo>
    <div>
      Pressed: {props.buttonPressed && `yes`},
      Times pressed: {props.timesPressed}
    </div>
    <MyButton
      click={props.actions.pressButton}
      pressed={props.buttonPressed}
      times={timesPressed}
    >
      Press me
    </MyButton>
    <Contacts data={props.contacts} />
  </div>
);

App.propTypes = {
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
