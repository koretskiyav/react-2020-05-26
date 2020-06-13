import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';
const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
        error: null,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return produce(state, (draft) => {
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};
