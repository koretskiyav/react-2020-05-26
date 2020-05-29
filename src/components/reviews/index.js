import React from 'react';

import Review from '../review';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default Reviews;
