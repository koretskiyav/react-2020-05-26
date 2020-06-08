import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { decrement, deleteProduct, increment } from '../../redux/actions';

const Order = (props) => {
  const { order, increment, decrement, deleteProduct } = props;
  const productsInOrder = Object.values(order);

  const getTotalPrice = useMemo(
    () =>
      productsInOrder.reduce((acc, item) => {
        return (acc += item.price * item.amount);
        // webStorm подчеркивает acc и говорит что это значение не используется. Где ошибка?
      }, 0),
    [productsInOrder]
  );

  return (
    <>
      {getTotalPrice > 0 && (
        <div className={styles.order}>
          {productsInOrder.map((item) => {
            return (
              // как вот это условие "item.amount > 0 &&" можно применить к самому верхнему div?
              // проблема в том что после удаления продукта из корзины, остаются пустые div_ы
              <div key={item.name}>
                {item.amount > 0 && (
                  <div>
                    <div className={styles.product}>
                      <div>{item.name}</div>
                      <div>Amount: {item.amount}</div>
                      <div>
                        <button onClick={() => decrement(item.id)}>-</button>
                        <button onClick={() => increment(item.id)}>+</button>
                      </div>
                      <div>Price: {item.price * item.amount}</div>
                      <button onClick={() => deleteProduct(item.id)}>X</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className={styles.totalPrice}>TotalPrice: {getTotalPrice}</div>
        </div>
      )}
    </>
  );
};

Order.propTypes = {
  order: PropTypes.shape({
    amount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
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
