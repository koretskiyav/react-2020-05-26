import React from 'react';

export default function Rate(props) {
  const averageRate = props.reviews.length
    ? props.reviews.reduce((acc, currRate) => {
        return acc + currRate.rating;
      }, 0) / props.reviews.length
    : 0;

  return <div>Restaurant rate: {averageRate.toFixed(1)}</div>;
}
