import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { restorauntReviews } from '../../redux/selectors';

const Reviews = ({ reviews, users }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} user={users[review.userId].name} {...review} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired,
};

Review.defaultProps = {
  reviews: [],
  users: [],
};

const mapStateToProps = (state, ownProps) => ({
  reviews: restorauntReviews(state, ownProps),
  users: state.users,
});

export default connect(mapStateToProps)(Reviews);
