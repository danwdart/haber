import {ContactsActions} from '../enums/contacts';
import {ContactsState} from '../types/state/contacts';
import {Action} from '../types/action';

const initialState: ContactsState = [];

export default (state = initialState, action: Action) => {
    switch (action.type) {
    case ContactsActions.requestContacts:
        return [];
    case ContactsActions.hydrateContacts:
        return action.contacts;
    default:
        return state;
    }
};
