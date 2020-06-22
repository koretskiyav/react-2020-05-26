import produce from 'immer';
import { LOAD_CURRENCY, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case LOAD_CURRENCY + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    // короче я хотел сделать чтобы курсы валют брались из ЦБ, и так-то получилось.
    // но когда дошел до селекторов я понял что свернул куда-то не туда.
    // если в меню можно просто заменять price каждого товара в зависимости от
    // валюты в контексте, то делать другие селекторы для тотала и сабтотал'ов
    // в корзине это плохая идея. не пойму как это сделать

    case LOAD_CURRENCY + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = {
        usd: 1,
        rub: response.Valute.USD.Value,
        eur: (response.Valute.USD.Value / response.Valute.EUR.Value).toFixed(2),
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
