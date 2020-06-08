import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { decrement, deleteProduct, increment } from '../../redux/actions';

const Order = (props) => {
  const { menu, order, increment, decrement, deleteProduct } = props;

  const orderMenu = useMemo(
    () =>
      menu.filter((item) => {
        return order[item.id] > 0;
      }),
    [order, menu]
  );

  const totalPrice = useMemo(
    () =>
      orderMenu.reduce((acc, item) => {
        console.log('acc: ', acc);
        console.log('item.price: ', item.price);
        return (acc += item.price * order[item.id]);
      }, 0),
    [orderMenu]
  );

  return (
    <div className={orderMenu.length > 0 ? styles.order : ''}>
      {orderMenu.map((product) => (
        <div key={product.id} className={styles.product}>
          <div>{product.name}</div>
          <div className={styles.amount}>
            <button onClick={() => decrement(product.id)}>-</button>
            <button onClick={() => increment(product.id)}>+</button>
            <span>Amount: {order[product.id]}</span>
          </div>
          <div>Price: {order[product.id] * product.price}</div>
          <button onClick={() => deleteProduct(product.id)}>X</button>
        </div>
      ))}
      {orderMenu.length > 0 && (
        <div className={styles.totalPrice}>Total Price: {totalPrice}</div>
      )}
    </div>
  );
};

Order.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  order: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default connect(
  (state) => ({
    order: state.order,
  }),
  {
    increment,
    decrement,
    deleteProduct,
  }
)(Order);
