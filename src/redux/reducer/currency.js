import produce from 'immer';
import { LOAD_CURRENCY, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {
    rub: {
      value: 69.7,
      symbol: '₽',
    },
    usd: {
      value: 1,
      symbol: '$',
    },
    eur: {
      value: 0.89,
      symbol: '€',
    },
  },
};

export default produce((draft = initialState, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case LOAD_CURRENCY + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }

    case LOAD_CURRENCY + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = {
        usd: {
          value: 1,
          symbol: '$',
        },
        rub: {
          value: response.Valute.USD.Value,
          symbol: '₽',
        },
        eur: {
          symbol: '€',
          value: (
            response.Valute.USD.Value / response.Valute.EUR.Value
          ).toFixed(2),
        },
      };
      break;
    }
    case LOAD_CURRENCY + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }

    default:
      return draft;
  }
});
