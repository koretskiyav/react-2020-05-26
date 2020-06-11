import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_USER,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const addReview = (values) => ({
  type: ADD_REVIEW,
  payload: { values },
});
export const addUser = (name, uuid) => ({
  type: ADD_USER,
  payload: { name, uuid },
});
