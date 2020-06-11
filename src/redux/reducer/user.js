import { normalizedUsers } from '../../fixtures';
import { ADDREVIEWS } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, userId, values } = action;

  switch (type) {
    case ADDREVIEWS:
      return {
        ...users,
        [userId]: {
          id: userId,
          name: values.name,
        },
      };
    default:
      return users;
  }
};
