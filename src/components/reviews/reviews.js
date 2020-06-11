import React from 'react';

import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews, id }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm id={id} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default Reviews;
