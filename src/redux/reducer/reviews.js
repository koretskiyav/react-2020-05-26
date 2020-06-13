import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

export default produce((draft = arrToMap(normalizedReviews), action) => {
  const { type, payload, reviewId, userId } = action;

  switch (type) {
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
