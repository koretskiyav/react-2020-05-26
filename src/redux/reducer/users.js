import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';
// import { normalizedUsers } from '../../fixtures';
import { arrToMap } from '../utils';

const initialState = {
  users: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, userId, usersFetch, error } = action;

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
        users: arrToMap(usersFetch),
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
        users: { ...state.users, [userId]: { id: userId, name } },
      };

    default:
      return state;
  }
};
