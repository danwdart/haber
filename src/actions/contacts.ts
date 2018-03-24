import {Contact} from '../types/contact';
import {Action} from '../types/action';
import {ContactsActions} from '../enums/contacts';

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
  } as Action
);
