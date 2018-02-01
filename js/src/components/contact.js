import React from 'react';

export default class Contact extends React.Component {
    render() {
        return <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.location}</td>
        </tr>
    }
}
