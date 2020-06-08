import { INCREMENT, DECREMENT } from './constants';

export const increment = (product) => ({
  type: INCREMENT,
  payload: {
    id: product.id,
    name: product.name,
    price: product.price,
  },
});
export const decrement = (product) => ({
  type: DECREMENT,
  payload: {
    id: product.id,
    name: product.name,
    price: product.price,
  },
});
