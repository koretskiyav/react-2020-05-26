import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (restaurants = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW: {
      return {
        ...restaurants,
        [payload.user.id]: payload.user,
      };
    }
    default:
      return restaurants;
  }
};
