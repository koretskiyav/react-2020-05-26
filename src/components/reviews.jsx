import React from 'react';
import Rate from './rate';

export default function ({ reviews }) {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(({ id, user, text, rating }) => (
        <div key={id} style={{ borderBottom: 'dashed' }}>
          <h5>
            {user}: {text}
          </h5>
          <h4>
            <Rate rating={rating} />
          </h4>
        </div>
      ))}
    </div>
  );
}
