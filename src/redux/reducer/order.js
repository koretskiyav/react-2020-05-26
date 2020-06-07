import { INCREMENT, DECREMENT, DELETEFROMCART } from '../constants';

const initialState = { products: [], total: 0 };
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      const x = payload.product;
      x.amount = state.products[x.id]?.amount + 1 || 1;
      x.total = x.amount * x.price;

      return {
        ...state,
        products: {
          ...state.products,
          [x.id]: x,
        },
        total: state.total + 1,
      };

    case DECREMENT:
      const z = payload.product;
      z.amount = state.products[z.id]?.amount - 1;
      z.total = z.amount * z.price;
      return {
        ...state,
        products: {
          ...state.products,
          [z.id]: z,
        },
        total: state.total - 1,
      };
    case DELETEFROMCART:
      const prods = state.products;
      delete prods[payload.product.id];
      return { ...state, prods, total: state.total - payload.product.amount };
    default:
      return state;
  }
};
