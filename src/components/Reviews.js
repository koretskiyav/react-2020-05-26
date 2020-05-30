import React from 'react';

import Rate from './Rate';

const Reviews = (props) => {
  const { user, text, rating, number } = props;

  return (
    <div>
      <p>{number + 1 + ')' + user + ':'}</p>
      <p>{'Текст отзыва: ' + text}</p>
      <Rate label="Оценка гостя: " rate={rating}></Rate>
      &nbsp;
    </div>
  );
};

export default Reviews;
