import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.scss';
import { connect } from 'react-redux';

const Order = (props) => {
  const { order } = props;
  const productsInOrder = Object.values(order);

  const getTotalPrice = useMemo(
    () =>
      productsInOrder.reduce((acc, item) => {
        return (acc += item.price * item.amount);
        // webStorm подчеркивает acc и говорит что это значение не используется. Где ошибка?
      }, 0),
    [productsInOrder]
  );
  const handleClick = () => {};

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
                      <div>Price: {item.price * item.amount}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className={styles.totalPrice}>TotalPrice: {getTotalPrice}</div>
          <button onClick={() => handleClick}>Clear cart</button>
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
  null
)(Order);
