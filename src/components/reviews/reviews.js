import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import {loadReviews, loadUsers} from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector
} from "../../redux/selectors";
import Loader from "../loader";

const Reviews = ({ reviews, restaurantId, loadReviews, loadUsers, loadingReviews, loadedReviews, loadingUsers, loadedUsers }) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [restaurantId]); //eslint-disable-line

  if((loadingReviews || !loadedReviews) && (loadingUsers || !loadedUsers)) return <Loader/>;

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

const mapStateToProps = (state) => ({
  loadingReviews: reviewsLoadingSelector(state),
  loadedReviews: reviewsLoadedSelector(state),
  loadingUsers: usersLoadingSelector(state),
  loadedUsers: usersLoadedSelector(state)
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
