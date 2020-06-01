import React from 'react';
import Rate from './rate.js';

export default function Review(props) {
  return (
    <div className="review">
      <div>{props.review.user}</div>
      <div>{props.review.text}</div>
      <Rate rate={props.review.rating} />
    </div>
  );
}
