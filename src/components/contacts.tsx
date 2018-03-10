import React from 'react';

import {Contact} from '../types/contact';
import ContactTable from './contact-table';

export default (props: {data: Contact[]}) =>
  <ContactTable data={props.data}/>
