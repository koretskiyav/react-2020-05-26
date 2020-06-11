import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const usersSelector = (state) => state.users;
const reviewsSelector = (state) => state.reviews;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const amountSelector = (state, ownProps) =>
  state.order[ownProps.id] || 0;

export const userSelector = (state, id) => {
  return state.users[state.reviews[id].userId].name;
};
//как бы его мемоизировать? не понял как правильно создать
// реселектор с ownProps
export const reviewSelector = (state, id) => ({
  ...state.reviews[id],
  user: state.users[state.reviews[id].userId].name,
});

export const avgSelector = (state, id) => {
  const total = state.restaurants[id].reviews.reduce(
    (acc, id) => acc + state.reviews[id].rating,
    0
  );
  //console.log(total);
  return Math.round(total / state.restaurants[id].reviews.length);
};
