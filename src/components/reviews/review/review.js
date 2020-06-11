import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import {reviewSelector, userReviewSelector} from "../../../redux/selectors";



const Review = ({ review,  user}) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating}/>
      </div>
    </div>
  </div>
);

Review.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.object.isRequired
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => ({
  review: reviewSelector(state, ownProps),
  user: userReviewSelector(state, ownProps)
});

export default connect(mapStateToProps)(Review);
