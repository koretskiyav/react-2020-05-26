import { normalizedRestaurants } from '../../fixtures';
import { ADD_NEW_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_REVIEW: {
      const { id, restaurauntId } = payload;
      const newObject = { ...restaurants[restaurauntId] };
      newObject.reviews.push(id);
      return {
        ...restaurants,
        [restaurauntId]: newObject,
      };
    }
    default:
      return restaurants;
  }
};
