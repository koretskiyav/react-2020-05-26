import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_TO_RESTAURANT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => {
  return { ...acc, [restaurant.id]: restaurant };
}, {});

console.log('defaultRestaurants: ', defaultRestaurants);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  console.log('restaurants payload: ', payload);
  switch (type) {
    case ADD_REVIEW_TO_RESTAURANT:
      console.log(
        'restaurants[payload.restaurantId].reviews: ',
        restaurants[payload.restaurantId].reviews
      );
      const temp = restaurants[payload.restaurantId].reviews.push(payload.uuid);
      return {
        ...restaurants,
        // temp,
      };
    default:
      return restaurants;
  }
};
