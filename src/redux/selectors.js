import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;

const reviewsRestaurant = (state, ownProps) =>  ownProps.restaurant.reviews;

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

export const productSelector = (state, ownProps) =>
    state.products[ownProps.id];


export const reviewSelector = (state, ownProps) => (
    state.reviews[ownProps.id]
);

export const userReviewSelector = (state, ownProps) => (
    state.users[state.reviews[ownProps.id].userId]
);

export const averageRatingSelector = createSelector(reviewsRestaurant, reviewsSelector, (reviewRestaurant, review) => {
   const allReviewsRestaurant =  reviewRestaurant.map((reviewId) => review[reviewId]);
   const total = allReviewsRestaurant.reduce((acc, { rating }) => acc + rating, 0);
   return Math.round(total / allReviewsRestaurant.length);
});


export const restaurantSelector = createSelector(restaurantsSelector, (restaurant) => {
    return Object.keys(restaurant)
        .map((id) => restaurant[id])
});