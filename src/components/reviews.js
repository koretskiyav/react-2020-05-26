import React from 'react';
import Rate from './rate';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <p>Отзывы</p>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>Посетитель: {review.user}</p>
          <p>Отзыв: {review.text}</p>
          <p>
            Рейтинг: <Rate rate={review.rating} />
          </p>
          <p>---------</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
