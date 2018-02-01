import React from 'react';

export default class Foo extends React.Component {
    render() {
        return <div className="hi">
            Hello World, my name is {this.props.name}
            {this.props.children}
        </div>
    }
}
