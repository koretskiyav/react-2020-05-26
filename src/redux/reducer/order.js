import produce from 'immer';
import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_ORDER,
  ERROR,
  SUCCESS,
  FAILURE,
  REQUEST,
} from '../constants';
const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, payload, error, response } = action;
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
    case ADD_ORDER + REQUEST:
      draft.loading = true;
      draft.loaded = false;
      draft.error = null;
      break;
    case ADD_ORDER + FAILURE:
      draft.loaded = false;
      draft.loading = false;
      draft.error = error;
      break;
    case ADD_ORDER + ERROR:
      draft.loaded = false;
      draft.loading = false;
      draft.error = response;
      break;
    case ADD_ORDER + SUCCESS:
      draft.entities = {};
      draft.loaded = false;
      draft.loading = false;
      draft.error = null;
      break;
    default:
      return draft;
  }
});
