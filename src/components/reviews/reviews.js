import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  arrRestaurantIdReviewsSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restaurantId,
  loadUsers,
  loadingUsers,
  loadedUsers,
  loadReviews,
  arrRestaurantId,
}) => {
  useEffect(() => {
    if (!arrRestaurantId.includes(restaurantId)) loadReviews(restaurantId);
    if (!loadingUsers && !loadedUsers) loadUsers();
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

export default connect(
  (state) => ({
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
    arrRestaurantId: arrRestaurantIdReviewsSelector(state),
  }),
  {
    loadReviews,
    loadUsers,
  }
)(Reviews);
