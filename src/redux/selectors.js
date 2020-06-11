import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
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

export const productSelector = (state, ownProps) => state.products[ownProps.id];
export const textSelector = (state, ownProps) =>
  state.reviews[ownProps.id].text;
export const ratingSelector = (state, ownProps) =>
  state.reviews[ownProps.id].rating;
export const userSelector = (state, ownProps) =>
  state.users[state.reviews[ownProps.id].userId].name;

export const nameSelector = (state, ownProps) =>
  state.restaurants[ownProps.id].name;
export const menuSelector = (state, ownProps) =>
  state.restaurants[ownProps.id].menu;
export const reviewsSelector = (state, ownProps) =>
  state.restaurants[ownProps.id].reviews;

const allReviewsSelector = (state) => state.reviews;

export const averageRatingSelector = createSelector(
  reviewsSelector,
  allReviewsSelector,
  (reviews, allReviews) => {
    const total = reviews.reduce((acc, reviewId) => {
      return (acc += allReviews[reviewId].rating);
    }, 0);
    return Math.round(total / reviews.length);
  }
);
// неудобно хранить все селекторы в одном месте, почему мы не пишем в том же файле что и редьюсер?
