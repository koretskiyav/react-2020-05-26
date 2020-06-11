import { INCREMENT, DECREMENT, REMOVE, ADD_NEW_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addNewReview = ({
  id,
  rating,
  text,
  name,
  userId,
  restaurauntId,
}) => ({
  type: ADD_NEW_REVIEW,
  payload: { id, rating, text, name, userId, restaurauntId },
});
