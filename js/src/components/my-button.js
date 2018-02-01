import React from 'react';

export default class MyButton extends React.Component {
    render() {
        return <button click={clickMe}>
            {this.props.children}
        </button>
    }
}
