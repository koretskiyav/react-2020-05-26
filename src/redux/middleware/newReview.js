import { ADDREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  console.log('before new review :', store.getState());
  console.log('action new review :', action);
  const {
    type,
    payload: { reviewData, nest },
  } = action;
  switch (type) {
    case ADDREVIEW:
      const userId = uuidv4(),
        reviewId = uuidv4();
      action.payload = {
        user: {
          id: userId,
          name: reviewData.name,
        },
        reviewData: {
          id: reviewId,
          text: reviewData.text,
          userId: userId,
          rating: reviewData.rate,
        },
        nest,
      };
      next(action);
      break;
    default:
      next(action);
      break;
  }
  next(action);
  console.log('after  new review:', store.getState());
};
