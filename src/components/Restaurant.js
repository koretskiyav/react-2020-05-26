import React, { Fragment, useMemo } from 'react';

import Menu from './menu';
import Reviews from './Reviews';
import Rate from './Rate';

const Restoraunt = (props) => {
  const { menu, reviews } = props.restorauntData;

  const arrayOfRating = useMemo(() => reviews.map((review) => review.rating), [
    reviews,
  ]);

  const restorauntRating = useMemo(
    () =>
      (
        arrayOfRating.reduce((sum, current) => {
          return sum + current;
        }) / arrayOfRating.length
      ).toFixed(1),
    [arrayOfRating]
  );

  return (
    <Fragment>
      <Menu menu={menu} />

      <h3>Отзывы гостей: </h3>
      {reviews.map((review, index) => (
        <Reviews
          key={review.id}
          user={review.user}
          text={review.text}
          rating={review.rating}
          number={index}
        />
      ))}
      <Rate label="Средняя оценка ресторана: " rate={restorauntRating} />
    </Fragment>
  );
};

export default Restoraunt;
