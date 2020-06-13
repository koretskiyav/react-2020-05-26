import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loadReviews }) => {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [restaurantId]); //eslint-disable-line

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(null, { loadReviews })(Reviews);
