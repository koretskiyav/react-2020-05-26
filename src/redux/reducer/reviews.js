import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.values.reviewUuid]: {
          id: payload.values.reviewUuid,
          rating: payload.values.rate,
          text: payload.values.text,
          userId: payload.values.userUuid,
        },
      };
    default:
      return reviews;
  }
};
