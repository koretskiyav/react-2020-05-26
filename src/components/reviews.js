import React from 'react';
import Rate from './rate';

const Reviews = (props) => {
  const reviews = props.reviews.map((review) => {
    return (
      <div key={review.id}>
        <hr />
        <p>
          <span>{review.user}: </span>
          <span>{review.text}</span>
        </p>
        <Rate rating={review.rating} />
      </div>
    );
  });

  return (
    <div>
      <h3>Reviews:</h3>
      {reviews}
    </div>
  );
};

export default Reviews;
