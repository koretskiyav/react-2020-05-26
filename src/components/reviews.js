import React from 'react';

import Rate from './rate';
import style from './reviews.module.css';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id} className={style.reviews}>
          <p>{review.user}</p>
          <p>{review.text}</p>
          <Rate rating={review.rating} />
        </div>
      ))}
    </div>
  );
}
