import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

console.log('defaultUsers: ', defaultUsers);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;
  console.log('users payload: ', payload);

  switch (type) {
    case ADD_USER:
      return {
        ...users,
        [payload.uuid]: {
          id: payload.uuid,
          name: payload.name,
        },
      };
    default:
      return users;
  }
};
