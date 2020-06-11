import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  // console.log('before :', store.getState());
  action.id = uuidv4();
  action.userId = uuidv4();
  // console.log('action :', action);
  next(action);
  // console.log('after :', store.getState());
};
