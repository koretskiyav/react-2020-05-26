import { INCREMENT, DECREMENT, DELETE_PRODUCT } from './constants';

export const increment = (id, name, price) => ({
  type: INCREMENT,
  payload: { id, name, price },
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price },
});
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: { id },
});
