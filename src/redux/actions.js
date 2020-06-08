import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
