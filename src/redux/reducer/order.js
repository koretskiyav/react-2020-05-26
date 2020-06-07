import { INCREMENT, DECREMENT, CLEAR_CART } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          amount: state[payload.id] ? state[payload.id].amount + 1 : 1,
          name: payload.name,
          price: payload.price,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          amount: state[payload.id] ? state[payload.id].amount - 1 : 0,
          name: payload.name,
          price: payload.price,
        },
      };
    case CLEAR_CART:
      return {
        ...state,
        // todo удалить все [payload.id]
      };
    default:
      return state;
  }
};
