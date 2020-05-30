import React from 'react';
import Rate from '../rate';
const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="review-author">{review.user}</div>

      <div className="review-text">{review.text}</div>

      <Rate rate={review.rating} />
    </div>
  );
};

export default Review;
