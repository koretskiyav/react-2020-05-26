import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = { orders: {} }, action) => {
  const { type, payload, product } = action;
  let amount;
  switch (type) {
    case INCREMENT:
      amount = (state[payload.id] || 0) + 1;
      return {
        ...state,
        [payload.id]: amount,
        orders: {
          ...state.orders,
          [payload.id]: {
            amount: amount,
            product: product,
          },
        },
      };
    case DECREMENT:
      amount = (state[payload.id] || 0) > 0 ? (state[payload.id] || 0) - 1 : 0;
      return {
        ...state,
        [payload.id]: amount,
        orders: {
          ...state.orders,
          [payload.id]: {
            amount: amount,
            product: product,
          },
        },
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: amount,
        orders: {
          ...state.orders,
          [payload.id]: {
            amount: 0,
            product: product,
          },
        },
      };
    default:
      return state;
  }
};
