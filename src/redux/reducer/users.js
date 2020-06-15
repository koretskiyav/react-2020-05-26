import { ADD_REVIEW } from '../constants';
import { arrToMap } from '../utils';
import { LOAD_USERS, SUCCESS, REQUEST, FAILURE } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, userId, error, response } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { name } = payload.review;
      return {
        ...state,
        [userId]: { id: userId, name },
      };

    default:
      return state;
  }
};
