import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

const chargedReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);
export default (reviews = chargedReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      return {
        ...reviews,
        [payload.reviewData.id]: payload.reviewData,
      };
    default:
      return reviews;
  }
};
