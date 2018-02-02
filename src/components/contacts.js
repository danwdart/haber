import React from 'react';

import ContactTable from './contact-table';

export default class Contacts extends React.Component {
    render() {
        return <ContactTable data={this.props.data}/>
    }
}
