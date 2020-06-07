import { INCREMENT, DECREMENT, CLEAR_CART } from './constants';

export const increment = (id, name, price) => ({
  type: INCREMENT,
  payload: { id, name, price },
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price },
});
export const clearCart = () => ({ type: CLEAR_CART });
