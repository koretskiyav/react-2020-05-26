import { INCREMENT, DECREMENT, NULLIFY } from '../constants';

// задался вопросом: а не удобнее ли хранить и отдавать в компонент данные удобного вида? Но в итоге данные хранятся удобно, но супер неудобно из использовать в приложении + я понимаю, что здесь происходят очень ресурсозатратные операции без всякой мемоизации итп. Да и не совсем понятно, что можно хранить в сторе, а что не стоит.
// типа если мы храним только ID продукта и количество, то очевидно, чтобы сопостивить с нужным продуктом, нам в компонент, который юзает наш стор надо дополнительно кидать список всех продуктов, что инкапсулирует дополнительную логику, которая не факт что не является лишней внутри компонента. В общем куча вопросов пока что.
export default (state = { order: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        order: state.order.find((item) => item.id === payload.product.id)
          ? [
              ...state.order.map((product) =>
                product.id === payload.product.id
                  ? { ...product, amount: product.amount + 1 }
                  : { ...product }
              ),
            ]
          : [...state.order, { ...payload.product, amount: 1 }],
      };
    case DECREMENT:
      return {
        ...state,
        order: state.order.find((item) => item.id === payload.product.id)
          ? [
              ...state.order.map((product) =>
                product.id === payload.product.id
                  ? { ...product, amount: product.amount - 1 }
                  : { ...product }
              ),
            ]
          : [...state.order, { ...payload.product, amount: 1 }],
      };
    case NULLIFY:
      return {
        ...state,
        order: [
          ...state.order.map((product) =>
            product.id === payload.product.id
              ? { ...product, amount: 0 }
              : { ...product }
          ),
        ],

        // [payload.product.id]: (state[payload.product.id] || 0) + 1,
      };
    default:
      return state;
  }
};
