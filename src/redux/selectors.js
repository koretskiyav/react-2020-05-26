import { createSelector } from 'reselect';
import { getAverage, getById, mapToArray } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

const orderSelector = (state) => state.order;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restaurantId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restaurantId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restaurantId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restaurantId];

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = mapToArray(restaurantsSelector);
export const productAmountSelector = getById(orderSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id]?.rating || 0);
    return Math.floor(getAverage(ratings) * 2) / 2;
  }
);

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

export const getRestByProductIdSelector = (state, props) => {
  const { id: productId } = props.product;
  let restId = '';
  return createSelector(mapToArray(restaurantsSelector), (rests) => {
    rests.map(({ menu, id }) => {
      if (menu.includes(productId)) {
        restId = id;
      }
    });
    return { restId };
  });
  /* меня очень смущает этот селектор.и то как бы луче вытащить
   айдишник нужного реста по айдишнику продукта и нужна ли здесь мемоизация
   селекторы для меня новый инструмент, так что интересно как это должно быть */
};
