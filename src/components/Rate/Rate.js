import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rate.module.scss';

const Rate = (props) => {
  const { reviews } = props;
  return (
    <div className={styles.root}>
      <p>
        <b>Name:</b> {reviews.user}
      </p>
      <p className={styles.text}>
        <b>Text:</b> {reviews.text}
      </p>
      <p>
        <b>★</b> {reviews.rating}
      </p>
    </div>
  );
};

Rate.propTypes = {
  reviews: PropTypes.object,
};

export default Rate;
