import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';
export default (store) => (next) => (action) => {
  console.log('213');
  if (action.type === ADD_REVIEW) {
    const userId = uuidv4();
    const reviewId = uuidv4();

    const { review, restaurantId } = action.payload;

    const new_payload = {
      review: {
        id: reviewId,
        userId: userId,
        text: review.text,
        rating: review.rate,
      },
      user: {
        id: userId,
        name: review.name,
      },
      restaurantId,
      reviewId,
    };

    action.payload = new_payload;
  }

  next(action);
};
