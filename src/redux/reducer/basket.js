import { POST_BASKET, REQUEST, SUCCESS, FAILURE } from '../constants';

const INITIAL_STATE = {
  block: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_BASKET + REQUEST: {
      return {
        ...state,
        block: true,
        error: null,
      };
    }
    case POST_BASKET + SUCCESS: {
      return {
        ...state,
        block: false,
        error: null,
      };
    }
    case POST_BASKET + FAILURE: {
      return {
        ...state,
        block: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
