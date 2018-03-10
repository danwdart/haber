import {Contact} from './contact';

export type Action =
{
  type: String,
  contacts?: Contact[]
};
