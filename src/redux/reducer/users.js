import { normalizedUsers } from '../../fixtures';
import { ADD_NEW_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_REVIEW: {
      const { name, userId } = payload;
      const id = userId;
      return {
        ...users,
        [id]: { name, id },
      };
    }
    default:
      return users;
  }
};
