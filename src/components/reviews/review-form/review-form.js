import React from 'react';
import useInput from '../../../hooks/use-input';

import { v4 as uuidv4 } from 'uuid';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';

const ReviewForm = ({ onSubmit }) => {
  const rate = useInput(5);
  const name = useInput('');
  const text = useInput('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit({ name: name.value, text: text.value, rate: rate.value });
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

export default connect(null, () => ({
  onSubmit: (values) => console.log(values), // TODO
}))(ReviewForm);
