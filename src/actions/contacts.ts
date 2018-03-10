import {Contact} from '../types/contact';
import {ContactsActions} from '../constants/contacts';

export const requestContacts = () =>
  async (dispatch: Function) =>
    dispatch(
      hydrateContacts(
        await (
          await fetch(`/mockdata/contacts.json`)
        ).json()
      )
    );

export const hydrateContacts = (contacts: Contact[]) => (
  {
    type: ContactsActions.hydrateContacts,
    contacts
  }
);
