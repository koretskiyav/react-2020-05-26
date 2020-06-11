import { v4 as uuidv4 } from 'uuid';
import {SUBMIT} from "../constants";


export default (store) => (next) => (action) => {
  console.log('before :', store.getState());
  console.log('action :', action);

  if(action.type === SUBMIT) {
    let newReviewId = uuidv4();
    let newUserId = uuidv4();

    action.payload.value = {
      ...action.payload.value,
      newReviewId,
      newUserId
    }
  }

  next(action);

  console.log('after :', store.getState());
};
