import { INCREMENT, DECREMENT, CLEAR } from './constants';

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
export const clear = (payload) => ({ type: CLEAR, payload });
