import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_RESTAURANTS,
  LOAD_USERS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `api/products?id=${restaurantId}`,
});

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });
  try {
    const reviewsFetch = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, reviewsFetch, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error, restaurantId });
  }
};

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });
  try {
    const usersFetch = await fetch('/api/users').then((res) => res.json());
    dispatch({ type: LOAD_USERS + SUCCESS, usersFetch });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
