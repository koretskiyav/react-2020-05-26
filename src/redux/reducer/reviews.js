import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

const initialState = {
  reviews: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = arrToMap(normalizedReviews), action) => {
  const { type, payload, reviewId, userId, reviewsFetch, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...draft,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...draft,
        reviews: arrToMap(reviewsFetch),
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...draft,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft[reviewId] = { id: reviewId, userId, text, rating };
      break;
    // case ADD_REVIEW:
    //   const { text, rating } = payload.review;
    //   return {
    //     ...state,
    //     [reviewId]: { id: reviewId, userId, text, rating },
    //   };
    default:
      return draft;
  }
});
