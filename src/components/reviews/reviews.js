import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { restorauntReviews } from '../../redux/selectors';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  reviews: restorauntReviews(state, ownProps),
});

export default connect(mapStateToProps)(Reviews);
