import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { errorOrderSelector } from '../../redux/selectors';
import styles from './FailureOrder.module.css';
import Button from '../button';
import { push } from 'connected-react-router';
import CurrencyContext from '../../contexts/currency';

const FailureOrder = ({ error, push }) => {
  const { getPrice, currency } = useContext(CurrencyContext);

  const reformatError = useMemo(
    () =>
      error?.replace(/\$(\d+)/g, (_, $1) => {
        return getPrice($1, currency);
      }),
    [error, getPrice, currency]
  );
  // я знаю что регулярки плохо использовать, но с сервера только в $ приходил ответ

  return (
    <div className={styles.root}>
      <div>{reformatError}</div>
      <Button secondary block onClick={() => push('/checkout')}>
        Return to basket
      </Button>
    </div>
  );
};

FailureOrder.propTypes = {
  error: PropTypes.string,
};

export default connect(
  (state) => ({
    error: errorOrderSelector(state),
  }),
  { push }
)(FailureOrder);
