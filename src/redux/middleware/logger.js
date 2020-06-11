import { v4 as uuidv4 } from 'uuid';

import {} from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === 'ADD_NEW_REVIEW') {
    const newPayload = { ...action.payload, id: uuidv4(), userId: uuidv4() };
    action.payload = { ...newPayload };
  }

  next(action);
};
