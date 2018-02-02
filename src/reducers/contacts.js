import * as contactsActions from '../constants/contacts';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
    case contactsActions.ACTION_REQUEST_CONTACTS:
        return [];
    case contactsActions.ACTION_HYDRATE_CONTACTS:
        return action.contacts;
    default:
        return state;
    }
};
