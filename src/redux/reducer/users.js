import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';
const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
export default (state = initialState, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
        error: null,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
        error,
      };
    case ADD_REVIEW:
      const { name } = payload.review;
      return produce(state, (draft) => {
        draft.entities[userId] = { id: userId, name };
      });
    default:
      return state;
  }
};
