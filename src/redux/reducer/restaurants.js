import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, rest) => ({ ...acc, [rest.id]: rest }),
  {}
);
export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW: {
      //console.log(payload);

      return {
        ...restaurants,
        [payload.nest]: {
          ...restaurants[payload.nest],
          reviews: [
            ...restaurants[payload.nest].reviews,
            payload.reviewData.id,
          ],
        },
      };
    }
    default:
      return restaurants;
  }
};
