import React from 'react';
import Rate from './rate';

export default function Review(props) {
  // console.log('props in review.js - ', props.reviews);

  const averageRating = (
    props.reviews.map((review) => review.rating).reduce((a, b) => a + b) /
    props.reviews.length
  ).toFixed(1);

  return (
    <div>
      <h4>REVIEWS</h4>
      <p>Average rating is {averageRating}</p>
      {props.reviews.map((review) => (
        <Rate key={review.id} review={review} />
      ))}
    </div>
  );
}
