import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { loadUsers } from '../../../redux/actions';
import { connect } from 'react-redux';
import { reviewWitUserSelector } from '../../../redux/selectors';
import Loader from '../../loader';

const Review = (props) => {
  // { review: { user = 'Anonymous', text, rating } },
  useEffect(() => {
    props.loadUsers();
  }, []); //eslint-disable-line

  const { loading } = props;

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {loading ? <Loader /> : props.review.user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {props.review.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={props.review.rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }),
};

export default connect(
  (state, props) => ({
    loading: state.users.loading,
    review: reviewWitUserSelector(state, props),
  }),
  { loadUsers }
)(Review);
