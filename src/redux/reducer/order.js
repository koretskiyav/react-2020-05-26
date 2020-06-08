import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = { orders: {} }, action) => {
  const { type, payload, product } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1,
        orders: {
          ...state.orders,
          [payload.id]: product,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: state[payload.id] <= 0 ? 0 : (state[payload.id] || 0) - 1,
        orders: {
          ...state.orders,
          [payload.id]: product,
        },
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: 0,
        orders: {
          ...state.orders,
          [payload.id]: product,
        },
      };
    default:
      return state;
  }
};
