import { INCREMENT, DECREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload = { id: '' } } = action;
  const count = state[payload.id] ? state[payload.id].count : 0;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          name: payload.name,
          count: count + 1,
          price: payload.price,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          name: payload.name,
          count: count - 1,
          price: payload.price,
        },
      };
    default:
      return state;
  }
};
