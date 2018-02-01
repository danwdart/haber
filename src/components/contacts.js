import React from 'react';

import ContactTable from './contact-table';
import * as data from '../mockdata/contacts.json';

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data};
    }

    async componentDidMount() {
        try {
            const result = await fetch(this.props.url),
                data = await result.json();

            this.setState({data});
        } catch (err) {
            console.error(this.props.url, err);
        }
    }

    render() {
        return <ContactTable data={this.state.data}/>
    }
}
