import { normalizedReviews } from '../../fixtures';
import { ADDREVIEWS } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, id, userId, values } = action;

  switch (type) {
    case ADDREVIEWS:
      return {
        ...reviews,
        [id]: {
          id: id,
          rating: values.rate,
          text: values.text,
          userId: userId,
        },
      };
    default:
      return reviews;
  }
};
