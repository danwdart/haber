import {ButtonActions} from '../enums/button';
import {Action} from '../types/action';
import {ButtonState} from '../types/state/button';

const initialState: ButtonState = {
  buttonPressed: false,
  timesPressed: 0
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ButtonActions.pressButton:
      return {
          ...state,
          buttonPressed: true,
          timesPressed: 1 + state.timesPressed
      };
    default:
      return state;
  }
};
