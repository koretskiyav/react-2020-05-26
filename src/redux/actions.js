import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  ADD_USER,
  ADD_REVIEW_TO_RESTAURANT,
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
export const addReviewToRestaurant = (uuid, restaurantId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload: { uuid, restaurantId },
});
