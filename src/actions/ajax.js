import * as ajaxActions from '../constants/ajax';

export const request = (url) => ({type: ajaxActions.ACTION_REQUEST, url});
export const response = (response) => ({type: ajaxActions.ACTION_RESPONSE, response});
