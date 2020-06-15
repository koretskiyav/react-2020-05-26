import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  products: {},
  loading: false,
  loaded: false,
  error: null,
};

// { [productId]: product }
export default (state = arrToMap(normalizedProducts), action) => {
  const { type, response, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        products: arrToMap(response),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
