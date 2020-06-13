import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReviewForm from './review-form';
import Review from './review';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  loaded,
  loading,
}) => {
  useEffect(() => {
    if (!loading || !loaded) loadReviews(restaurantId);
    loadUsers();
  }, [restaurantId]); //eslint-disable-line

  if (!loaded || loading) return <Loader />;

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
  loaded: reviewsLoadedSelector(state),
  loading: reviewsLoadingSelector(state),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
