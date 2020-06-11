import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

const Reviews = ({ reviews, nest }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm nest={nest} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string),
};

export default Reviews;
