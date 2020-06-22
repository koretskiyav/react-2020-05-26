import produce from 'immer';
import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  PAY_ORDER,
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
    case PAY_ORDER + REQUEST:
      draft.loading = true;
      draft.loaded = false;
      draft.error = null;
      break;
    case PAY_ORDER + FAILURE:
      draft.loaded = true;
      draft.loading = false;
      draft.error = error;
      break;
    case PAY_ORDER + SUCCESS:
      draft.entities = {};
      draft.loaded = true;
      draft.loading = false;
      draft.error = null;
      break;
    default:
      return draft;
  }
});
