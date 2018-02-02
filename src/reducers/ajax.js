import * as ajaxActions from '../constants/ajax';

const STATUS_PENDING = 0,
    STATUS_SUCCESS = 1,
    STATUS_FAILURE = -1;

const enumStatus = [
    STATUS_PENDING,
    STATUS_SUCCESS,
    STATUS_FAILURE
];

const initialState = {
    requestURL: null,
    status: null,
    response: null
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ajaxActions.ACTION_REQUEST:
        return {
            ...state,
            requestURL: action.url,
            status: STATUS_PENDING
        };
    case ajaxActions.ACTION_RESPONSE:
        return {
            ...state,
            status: STATUS_SUCCESS,
            response: action.response
        };
    default:
        return state;
    }
};
