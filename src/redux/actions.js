import { INCREMENT, DECREMENT, REMOVE, ADDREVIEWS } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReviews = (values) => ({
  type: ADDREVIEWS,
  id: '',
  userId: '',
  values,
});
