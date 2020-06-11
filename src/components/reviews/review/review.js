import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import UserName from './username.js';
import styles from './review.module.css';

const Review = ({ review }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          <UserName id={review.userId} />
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  userId: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => ({
  review: state.reviews[ownProps.id],
});

export default connect(mapStateToProps)(Review);
