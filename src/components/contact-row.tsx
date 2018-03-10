import React from 'react';
import {Contact} from '../types/contact';

export default (props: Contact) =>
  <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>{props.location}</td>
  </tr>
