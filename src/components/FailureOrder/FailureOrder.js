import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { errorOrderSelector } from '../../redux/selectors';
import styles from './FailureOrder.module.css';
import { withRouter } from 'react-router-dom';
import Button from '../button';

const FailureOrder = ({ error, history: { push } }) => {
  return (
    <div className={styles.root}>
      <div>{error}</div>
      <Button secondary block onClick={() => push('/checkout')}>
        Return to basket
      </Button>
    </div>
  );
};

FailureOrder.propTypes = {
  error: PropTypes.string,
};

export default withRouter(
  connect((state) => ({
    error: errorOrderSelector(state),
  }))(FailureOrder)
);
