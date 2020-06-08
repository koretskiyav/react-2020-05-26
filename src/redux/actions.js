import { INCREMENT, DECREMENT, DELETE_PRODUCT } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: { id },
});
