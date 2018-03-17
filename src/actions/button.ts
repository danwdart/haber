import {ButtonActions} from '../enums/button';
import {Action} from '../types/action';

export const pressButton = () => (
  {
    type: ButtonActions.pressButton
  } as Action
);
