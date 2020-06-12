import { v4 as uuidv4 } from 'uuid';
import { addReview, addReviewToRestaurant, addUser } from '../actions';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const { type, payload } = action;
  if (type === ADD_REVIEW) {
    const reviewUuid = uuidv4();
    const userUuid = uuidv4();
    next(addReview({ ...payload.values, reviewUuid, userUuid }));
    next(addUser(payload.values.name, userUuid));
    next(addReviewToRestaurant(reviewUuid, payload.values.restaurantId));
  } else {
    next(action);
  }
};
