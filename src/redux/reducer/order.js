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
      return {
        ...state,
        [product.id]: {
          ...(state[product.id] || {}),
          ...product,
          amount: ((state[product.id] && state[product.id].amount) || 0) - 1,
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
