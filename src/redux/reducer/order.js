import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  BOOK_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[payload.id] = Math.max(
        (draft.entities[payload.id] || 0) - 1,
        0
      );
      break;
    case REMOVE:
      draft.entities[payload.id] = 0;
      break;
    case BOOK_ORDER + REQUEST: {
      draft.loading = true;
      break;
    }
    case BOOK_ORDER + SUCCESS: {
      draft.entities = {};
      draft.loading = false;
      draft.loaded = true;
      break;
    }
    case BOOK_ORDER + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
