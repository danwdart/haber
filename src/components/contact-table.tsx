import React from 'react';
import ContactRow from './contact-row';
import {Contact} from '../types/contact';

export default (props: {data: Contact[]}) => {
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(contact =>
          <ContactRow
            key={contact.id}
            id={contact.id}
            name={contact.name}
            location={contact.location}
          />
      )}
    </tbody>
  </table>;
