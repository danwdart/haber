import { combineReducers } from 'redux';
import button from './button';
import ajax from './ajax';
import contacts from './contacts';

export default combineReducers({button, ajax, contacts});
