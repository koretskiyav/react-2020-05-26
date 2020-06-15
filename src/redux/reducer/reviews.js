import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
// import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

const initialState = {
  reviews: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, reviewsFetch, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.reviews = arrToMap(reviewsFetch);
      draft.loading = false;
      draft.loaded = true;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.reviews[reviewId] = { id: reviewId, userId, text, rating };
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
