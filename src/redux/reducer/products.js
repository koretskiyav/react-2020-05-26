import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: {},
  error: null,
  loading: false,
  loaded: false,
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOAD_PRODUCTS + SUCCESS: {
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };
    }
    case LOAD_PRODUCTS + FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    }
    default:
      return state;
  }
};
