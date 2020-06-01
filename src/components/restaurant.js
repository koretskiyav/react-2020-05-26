import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

const Restaurant = ({ restaurant: { menu, reviews } }) => {
  const averageRate = useMemo(() => getAverageRate(reviews), [reviews]);
  return (
    <div className="restaurant">
      <Menu menu={menu} />
      <div className="reviews">
        <Reviews reviews={reviews} />
        <p>
          {' '}
          Средний рейтинг на основе отзывов: <Rate rate={averageRate} />
        </p>
      </div>
    </div>
  );
};

function getAverageRate(reviews) {
  const sumRate = reviews
    .map((review) => review.rating)
    .reduce((a, b) => a + b, 0);
  return +((reviews.length ? sumRate : 0) / reviews.length).toFixed(1);
}

export default Restaurant;
