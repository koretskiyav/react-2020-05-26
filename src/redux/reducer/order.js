import { INCREMENT, DECREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, product } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [product.id]: {
          ...(state[product.id] || {}),
          ...product,
          amount: ((state[product.id] && state[product.id].amount) || 0) + 1,
        },
      };
    case DECREMENT:
      const amount = ((state[product.id] && state[product.id].amount) || 0) - 1;
      return {
        ...state,
        [product.id]: {
          ...(state[product.id] || {}),
          ...product,
          amount: amount < 0 ? 0 : amount,
        },
      };
    case REMOVE:
      return {
        ...state,
        [product.id]: undefined,
      };
    default:
      return state;
  }
};
