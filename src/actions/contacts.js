import * as contactsActions from '../constants/contacts';

export const requestContacts = () => ({type: contactsActions.ACTION_REQUEST_CONTACTS});
export const hydrateContacts = (contacts) => ({type: contactsActions.ACTION_HYDRATE_CONTACTS, contacts});
