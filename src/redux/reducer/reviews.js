import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

console.log('defaultReviews: ', defaultReviews);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        console: console.log('Reviews payload: ', payload),
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
