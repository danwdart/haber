import React from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends React.Component {
    render() {
        return <button onClick={this.props.click}>
            Pressed: {this.props.pressed && `yes`}, times: {this.props.times}
            {this.props.children}
        </button>
    }
}

MyButton.propTypes = {
    times: PropTypes.number,
    pressed: PropTypes.bool
};
