import { INCREMENT, DECREMENT, CLEAR } from '../constants';
import { getAmount } from './stateGetters';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: { ...payload, amount: getAmount(state[payload.id]) + 1 },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: { ...payload, amount: getAmount(state[payload.id]) - 1 },
      };
    case CLEAR:
      return {
        ...state,
        [payload.id]: { ...payload, amount: 0, totalPrice: 0 },
      };
    default:
      return state;
  }
};
