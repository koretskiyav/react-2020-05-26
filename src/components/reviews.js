import React from 'react';

import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <p>User: {review.user}</p>
              <p>Text: {review.text}</p>
              <Rate rating={review.rating} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
