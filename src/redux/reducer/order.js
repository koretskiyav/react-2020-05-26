import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  PLACE_AN_ORDER,
  REQUEST,
  EMPTY_OUT_THE_BASKET,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  error: null,
};
// { [productId]: amount }
export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: (state.entities[payload.id] || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max((state.entities[payload.id] || 0) - 1, 0),
        },
      };
    case REMOVE:
      return {
        ...state,
        entities: { ...state.entities, [payload.id]: 0 },
      };
    case EMPTY_OUT_THE_BASKET:
      return {
        ...state,
        entities: { ...(state.entities = {}) },
      };
    case PLACE_AN_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PLACE_AN_ORDER + SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case PLACE_AN_ORDER + FAILURE:
      return {
        ...state,
        error: error || response,
      };
    default:
      return state;
  }
};
