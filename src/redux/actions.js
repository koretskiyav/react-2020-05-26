import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (id, product) => ({
  type: INCREMENT,
  payload: { id },
  product: product,
});
export const decrement = (id, product) => ({
  type: DECREMENT,
  payload: { id },
  product: product,
});
export const remove = (id, product) => ({
  type: REMOVE,
  payload: { id },
  product: product,
});
