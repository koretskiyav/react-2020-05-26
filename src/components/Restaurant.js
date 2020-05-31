import React, { useMemo } from 'react';
import Reviews from './Reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant(props) {
  const ratings = useMemo(
    () => props.restaurant.reviews.map((review) => review.rating),
    [props.restaurant.reviews]
  );

  const averageRating = useMemo(
    () => ratings.reduce((r1, r2) => r1 + r2) / ratings.length,
    [ratings]
  );

  return (
    <div>
      <h3>
        <Rate rate={averageRating} />
      </h3>
      <Menu menu={props.restaurant.menu} />
      <h4>Review:</h4>
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
}
