import React from 'react';

import Contact from './contact';

export default class ContactTable extends React.Component {
    render() {
        const contacts = this.props.data.map(contact =>
            <Contact key={contact.id} id={contact.id} name={contact.name} location={contact.location}/>
        );
        return <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    }
}
