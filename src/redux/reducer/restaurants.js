import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEWS } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, values, id } = action;

  switch (type) {
    case ADDREVIEWS:
      return {
        ...restaurants,
        [values.restaurant]: {
          ...restaurants[values.restaurant],
          reviews: [...restaurants[values.restaurant].reviews.concat(id)],
        },
      };
    default:
      return restaurants;
  }
};
