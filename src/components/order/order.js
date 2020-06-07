import React from 'react';
import styles from './order.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, nullify } from '../../redux/actions';
import OrderItem from './orderItem';

const Order = ({ order, increment, decrement, nullify }) => {
  const cart = order.map((item) => {
    return (
      <OrderItem
        key={Math.random().toString(36).substr(2, 9)}
        item={item}
        increment={increment}
        decrement={decrement}
        nullify={nullify}
      />
    );
  });

  return <div className={styles.order}>{cart}</div>;
};

const mapStateToProps = ({ order }) => ({
  order: [...order.order],
});

const mapDispatchToProps = {
  increment,
  decrement,
  nullify,
};

Order.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  nullify: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
