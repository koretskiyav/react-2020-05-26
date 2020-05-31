import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

import { calcReviewsAverageRating } from '../helpers';

const Restaurant = ({ data }) => {
  const { name, menu, reviews } = data;
  const averageRating = calcReviewsAverageRating(reviews);

  return (
    <div>
      <h1>{name}</h1>
      <h2>
        Av. rating: <Rate rate={averageRating} />
      </h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Restaurant;
