import React from 'react';
import styles from '../order/order.module.css';

const OrderItem = (order) => {
  const sum = order.product.amount * order.product.product.price;

  return (
    <>
      <div className={styles.orderListPoint}>{order.product.product.name}</div>
      <div className={styles.orderListPoint}>
        {order.product.product.price} $
      </div>
      <div className={styles.orderListPoint}>{order.product.amount} </div>
      <div className={styles.orderListPoint}>{sum} $</div>
    </>
  );
};

export default OrderItem;
