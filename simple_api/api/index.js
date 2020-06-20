const router = require('express').Router();
const mocks = require('./mock');

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get('/restaurants', function (req, res, next) {
  reply(res, mocks.restaurants);
});

router.get('/products', function (req, res, next) {
  const id = req.query.id;
  let result = mocks.products;
  if (id) {
    const restaurant = mocks.restaurants.find(function (r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.menu.map(function (productId) {
        return mocks.products.find(function (product) {
          return product.id === productId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/reviews', function (req, res, next) {
  const id = req.query.id;
  let result = mocks.reviews;
  if (id) {
    const restaurant = mocks.restaurants.find(function (r) {
      return r.id === id;
    });
    if (restaurant) {
      result = restaurant.reviews.map(function (reviewId) {
        return mocks.reviews.find(function (review) {
          return review.id === reviewId;
        });
      });
    }
  }
  reply(res, result);
});

router.get('/users', function (req, res, next) {
  reply(res, mocks.users);
});

router.post('/order', function (req, res, next) {
  const total = req.body
    .map(
      ({ id, amount }) =>
        mocks.products.find((product) => product.id === id).price * amount
    )
    .reduce((acc, next) => acc + next, 0);

  if (total < 50)
    return reply(
      res,
      `you ordered for $${total}, but the minimum order amount is $50`,
      3000,
      400
    );
  if (total > 200)
    return reply(
      res,
      `you ordered for $${total}, but the maximum order amount is $200`,
      3000,
      400
    );
  return reply(res, 'ok', 3000);
});

module.exports = router;
