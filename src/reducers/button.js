import * as buttonActions from '../constants/button';

const initialState = {
    buttonPressed: false,
    timesPressed: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
    case buttonActions.ACTION_PRESS_BUTTON:
        return {
            ...state,
            buttonPressed: true,
            timesPressed: 1 + state.timesPressed
        };
    default:
        return state;
    }
};
