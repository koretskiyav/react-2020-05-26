import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';
import OrderItem from '../orderItem';
import styles from './order.module.css';

const Order = ({ orders, increment, decrement, remove }) => {
  const total = orders.reduce(
    (acc, order) => acc + order.amount * order.product.price,
    0
  );

  return (
    <div className={styles.order}>
      <ul className={styles.orderList}>
        <li className={styles.orderListItem}>
          <div className={styles.orderListPoint}>
            <b>name</b>
          </div>
          <div className={styles.orderListPoint}>
            <b>price</b>
          </div>
          <div className={styles.orderListPoint}>
            <b>count</b>
          </div>
          <div className={styles.orderListPoint}>
            <b>total</b>
          </div>
        </li>
        {orders.map((order) => (
          <li className={styles.orderListItem} key={order.product.id}>
            <OrderItem
              product={order}
              increment={increment}
              decrement={decrement}
            />
            <div className={styles.orderListPoint}>
              <button
                onClick={() => decrement(order.product.id, order.product)}
                data-id="product-decrement"
              >
                -
              </button>
              <button
                onClick={() => increment(order.product.id, order.product)}
                data-id="product-decrement"
              >
                +
              </button>
              <button
                onClick={() => remove(order.product.id, order.product)}
                data-id="product-decrement"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.orderTotal}>
        <div className={styles.orderListPoint}>
          <b>Grand Total</b>
        </div>
        <div className={styles.orderListPoint}>
          <b>{total} $</b>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ order }) => ({
  orders: Object.keys(order.orders)
    .map((id) => order.orders[id])
    .filter((order) => order.amount > 0),
});

Order.propTypes = {
  orders: PropTypes.array.isRequired,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
