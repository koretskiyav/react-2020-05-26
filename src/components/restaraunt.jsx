import React from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function ({ menu, reviews }) {
  const total =
    reviews.length > 1
      ? reviews.reduce((a, v) => a + v.rating, 0) / reviews.length
      : reviews[0].rating;

  return (
    <div>
      <div style={{ borderBottom: 'solid' }}>
        Toral rating: <Rate rating={total} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
}
