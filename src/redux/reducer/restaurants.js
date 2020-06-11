import { normalizedRestaurants } from '../../fixtures';
import {SUBMIT} from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce((acc, restaurant) => (
    {...acc, [restaurant.id]: restaurant}
), {});

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT:
      return {
        ...restaurants,
        [payload.value.activeRestaurant]: {
          ...restaurants[payload.value.activeRestaurant],
          reviews: [
            payload.value.newReviewId,
            ...restaurants[payload.value.activeRestaurant].reviews
          ]
        }
      };
    default:
      return restaurants;
  }
};
