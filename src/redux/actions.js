import { INCREMENT, DECREMENT, NULLIFY } from './constants';

export const increment = (product) => {
  return {
    type: INCREMENT,
    payload: { product },
  };
};
export const decrement = (product) => ({
  type: DECREMENT,
  payload: { product },
});
export const nullify = (product) => ({
  type: NULLIFY,
  payload: { product },
});
