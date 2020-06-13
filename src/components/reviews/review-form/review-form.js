import React from 'react';
import PropTypes from 'prop-types';

import useInput from '../../../hooks/use-input';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';
import { addReview } from '../../../redux/actions';

const ReviewForm = ({ onSubmit }) => {
  const rating = useInput(5);
  const name = useInput('');
  const text = useInput('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({ name: name.value, text: text.value, rating: rating.value });
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input placeholder="Your name" className={styles.message} {...name} />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...rating} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default connect(null, (dispatch, props) => ({
  onSubmit: (review) => dispatch(addReview(review, props.restaurantId)),
}))(ReviewForm);
