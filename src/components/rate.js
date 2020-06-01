import React from 'react';
function calculateRating(props) {
  if (Array.isArray(props.rate)) {
    let summRating = 0;
    props.rate.map((rate) => {
      summRating += rate.rating;
    });
    let averageRating = `Рейтинг ресторана: ${Math.round(
      summRating / props.rate.length
    )}`;
    return averageRating;
  } else {
    let reviewRating = `Оценка: ${Math.round(props.rate)}`;
    return reviewRating;
  }
}
export default function Rate(props) {
  return <div>{calculateRating(props)}</div>;
}
