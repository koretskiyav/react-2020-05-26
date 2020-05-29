import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';
import withTitle from '../hocs/withTitle';

const Restaurant = ({ restaurant }) => {
  const sumRating = restaurant.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const avgRating = parseFloat(sumRating / restaurant.reviews.length).toFixed(
    1
  );
  const RateWithTitle = withTitle(Rate);

  return (
    <div>
      <RateWithTitle title={'Average rating'} rating={avgRating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
