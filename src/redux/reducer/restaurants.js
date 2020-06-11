import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_TO_RESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  return { ...acc, [restaurant.id]: restaurant };
}, {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_REVIEW_TO_RESTAURANT:
      restaurants[payload.restaurantId].reviews = [
        ...restaurants[payload.restaurantId].reviews,
        payload.uuid,
      ];
      return {
        ...restaurants,
      };
    default:
      return restaurants;
  }
};
