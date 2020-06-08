import React from 'react';
import PropTypes from 'prop-types';
import styles from './orderItem.module.css';
import { connect } from 'react-redux';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import { decrement, increment } from '../../redux/actions';

const OrderItem = ({ orderItem, increment, decrement }) => {
  return (
    <div className={styles.row}>
      <div className={styles.name}>{orderItem.name}</div>
      <div className={styles.count}>{orderItem.count}</div>
      <div className={styles.price}>{orderItem.price}</div>
      <div className={styles.price}>
        Cost of product: {orderItem.price * orderItem.count}
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => decrement(orderItem)}
          data-id="product-decrement"
        >
          <img src={MinusIcon} alt="minus" />
        </button>
        <button
          className={styles.button}
          onClick={() => increment(orderItem)}
          data-id="product-increment"
        >
          <img src={PlusIcon} alt="plus" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  increment,
  decrement,
};

const mapStateToProps = (state, ownProps) => {
  return {
    amount: state.order[ownProps.orderItem.id]
      ? state.order[ownProps.orderItem.id].count
      : 0,
  };
};

OrderItem.propTypes = {
  orderItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);
