import { normalizedReviews } from '../../fixtures';
import {SUBMIT} from "../constants";

const defaultReviews = normalizedReviews.reduce((acc, review) => (
    {...acc, [review.id]: review}
), {});

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT:
      return {
        ...reviews,
        [payload.value.newReviewId]: {
          id: payload.value.newReviewId,
          userId: payload.value.newUserId,
          text: payload.value.text,
          rating: payload.value.rate
        }
      };
    default:
      return reviews;
  }
};
