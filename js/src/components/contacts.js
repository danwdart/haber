import React from 'react';
import fetch from 'isomorphic-fetch';

import ContactTable from './contact-table';
import mockContacts from '../../mockdata/contacts.json';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: mockContacts};
    }

    componentDidMount() {
        fetch(this.props.url)
            .then((r) => r.json())
            .then((r) => this.setState({data: r}))
            .catch((err) => console.error(this.props.url, err));
    }

    render() {
        return <ContactTable data={this.state.data}/>
    }
}
