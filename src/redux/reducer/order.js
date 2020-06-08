import { INCREMENT, DECREMENT, DELETE_PRODUCT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) - 1,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        [payload.id]: 0,
      };
    default:
      return state;
  }
};
