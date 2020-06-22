import { replace, push } from 'connected-react-router';
import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  POST_BASKET,
  ORDER_RESET,
} from './constants';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
} from './selectors';

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
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });
  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, response, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error, restaurantId });
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch({ type: LOAD_USERS, CallAPI: '/api/users' });
};

export const onCheckout = (event) => async (dispatch, getState) => {
  const state = getState();

  if (state.router.location.pathname !== '/checkout') return;

  event.preventDefault();

  dispatch({ type: POST_BASKET + REQUEST });

  try {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        Object.entries(state.order).reduce(
          (acc, [id, amount]) => [...acc, { id, amount }],
          []
        )
      ),
    };

    const response = await fetch('/api/order', init);

    if (response.status !== 200) {
      dispatch({ type: POST_BASKET + FAILURE, payload: await response.json() });
      return;
    }
  } catch (error) {
    dispatch({ type: POST_BASKET + FAILURE, payload: error });
  }

  dispatch({ type: POST_BASKET + SUCCESS });
  dispatch({ type: ORDER_RESET });
  dispatch(push('/success'));
};
