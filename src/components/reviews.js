import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      <span>Customers reviews:</span>
      {props.reviews.map((review) => (
        <div key={review.id}>
          {review.user}: {review.text} | {review.rating}
        </div>
      ))}
      <Rate reviews={props.reviews} />
    </div>
  );
}
