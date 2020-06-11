import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

// { [productId]: product }
export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW: {
      return {
        ...users,
        [payload.user.id]: payload.user,
      };
    }
    default:
      return users;
  }
};
