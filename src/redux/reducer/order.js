import { INCREMENT, DECREMENT, DELETE_PRODUCT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          amount: state[payload.id] ? state[payload.id].amount + 1 : 1,
          name: payload.name || state[payload.id].name,
          price: payload.price || state[payload.id].price,
          id: payload.id,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          amount: state[payload.id] ? state[payload.id].amount - 1 : 0,
          name: payload.name || state[payload.id].name,
          price: payload.price || state[payload.id].price,
          id: payload.id,
        },
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        [payload.id]: {
          amount: 0,
          name: state[payload.id].name,
          price: state[payload.id].price,
          id: payload.id,
        },
      };
    default:
      return state;
  }
};
