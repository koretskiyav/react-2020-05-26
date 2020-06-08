import React from 'react';
import PropTypes from 'prop-types';
import styles from './orderItem.module.css';
import TrashIcon from './icons/trash.svg';

const OrderItem = ({ item, increment, decrement, nullify }) => {
  if (item.amount <= 0) return null;
  const { id, name, amount, price } = item;
  return (
    <div>
      <div key={id} className={styles.orderItem}>
        <span className={styles.name}>{name}</span>
        <span className={styles.controls}>
          <button onClick={() => decrement(item)}>-</button>{' '}
          <span className={styles.amount}>{amount}</span>{' '}
          <button onClick={() => increment(item)}>+</button>
        </span>
        <span className={styles.price}>{price} $</span>
        {'  '}
        <button onClick={() => nullify(item)}>
          <img src={TrashIcon} width="15px" height="15px" />
        </button>
      </div>
    </div>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape(
    {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }.isRequired
  ).isRequired,
};

export default OrderItem;
