import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

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

export const textSelector = (state, ownProps) =>
  state.reviews[ownProps.id].text;
export const ratingSelector = (state, ownProps) =>
  state.reviews[ownProps.id].rating;
export const userSelector = (state, ownProps) =>
  state.users[state.reviews[ownProps.id].userId].name;
