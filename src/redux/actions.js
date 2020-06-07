import { INCREMENT, DECREMENT, DELETEFROMCART } from './constants';

export const increment = (product) => ({
  type: INCREMENT,
  payload: { product },
});
export const decrement = (product) => ({
  type: DECREMENT,
  payload: { product },
});
export const deleteFromCart = (product) => ({
  type: DELETEFROMCART,
  payload: { product },
});
