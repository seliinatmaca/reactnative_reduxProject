import {CHARACTERS_URL} from '../../service/url';
import {getRequest} from '../../service/verbs';
import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  CHARACTERS_REJECT,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      // console.log('API Response:', response);
      //console.log('API Data:', response.data);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT, error: error});
    }
  };
};
