import React from 'react';
import useInput from '../../../hooks/use-input';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import { addReviews } from '../../../redux/actions';
import Button from '../../button';

const ReviewForm = ({ onSubmit, id }) => {
  const rate = useInput(5);
  const name = useInput('');
  const text = useInput('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({
      name: name.value,
      text: text.value,
      rate: rate.value,
      restaurant: id,
    });
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
            <Rate {...rate} />
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

const mapDispatchToProps = {
  onSubmit: (values) => addReviews(values),
};

export default connect(null, mapDispatchToProps)(ReviewForm);
