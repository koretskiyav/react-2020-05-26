import { normalizedReviews } from '../../fixtures';
import { ADD_NEW_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_REVIEW: {
      const { id, rating, text, userId } = payload;
      return {
        ...reviews,
        [id]: { id, rating, text, userId },
      };
    }
    default:
      return reviews;
  }
};
