import React from 'react';
import Rate from './rate';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{`${review.user}: ${review.text}`}</h3>
          <h4>
            Rating: <Rate rate={review.rating} />
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
