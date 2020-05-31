import React from 'react';
import Rate from '../rate';
import style from './reviews.module.css';

export default function Index(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id} className={style.review}>
          <div className={style.review__header}>
            <div className={style.review__name}>{review.user}</div>
            <div className={style.review__rating}>
              <Rate rate={review.rating} />
            </div>
          </div>
          <div className={style.review__text}>{review.text}</div>
        </div>
      ))}
    </div>
  );
}
