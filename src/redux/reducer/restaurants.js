import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_TO_RESTAURANT } from '../constants';
import reviews from './reviews';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  return { ...acc, [restaurant.id]: restaurant };
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_REVIEW_TO_RESTAURANT:
      return {
        ...restaurants,
        [restaurants[payload.restaurantId].reviews]: [
          ...restaurants[payload.restaurantId].reviews,
          payload.uuid,
        ],
      };
    default:
      return restaurants;
  }
};
