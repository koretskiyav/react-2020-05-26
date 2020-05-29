import React from 'react';

import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ restaurant: { menu, reviews } }) {
  const averageRating =
    reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length;
  return (
    <div>
      <Rate rating={averageRating.toFixed(2)} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
