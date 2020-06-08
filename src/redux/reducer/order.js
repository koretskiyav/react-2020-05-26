import { INCREMENT, DECREMENT, REMOVE } from '../constants';
import { getAmountFromState, cloneObjWithoutKey } from '../helpers';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          amount: getAmountFromState(state[payload.id]) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          amount:
            getAmountFromState(state[payload.id]) > 0
              ? getAmountFromState(state[payload.id]) - 1
              : 0,
        },
      };
    case REMOVE:
      return cloneObjWithoutKey(state, payload.id);
    default:
      return state;
  }
};
