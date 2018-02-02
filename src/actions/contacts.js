import * as contactsActions from '../constants/contacts';

 // => ({type: contactsActions.ACTION_REQUEST_CONTACTS});
export const requestContacts = () => async dispatch => dispatch(hydrateContacts(await (await fetch(`/mockdata/contacts.json`)).json()));
export const hydrateContacts = contacts => ({type: contactsActions.ACTION_HYDRATE_CONTACTS, contacts});
