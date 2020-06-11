import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const userId = uuidv4();
    const reviewId = uuidv4();

    action.payload = {
      review: {
        id: reviewId,
        userId: userId,
        text: action.payload.review.text,
        rating: action.payload.review.rate,
      },
      user: {
        id: userId,
        name: action.payload.review.name,
      },
      restaurantId: action.payload.restaurantId,
      reviewId,
    };
  }
  next(action);
};
