import React, { useEffect, useMemo } from 'react';
import styles from '../product/product.module.css';
import { connect } from 'react-redux';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import RemoveIcon from '../product/icons/remove.svg';
import { increment, decrement, clear } from '../../redux/actions';
import PropTypes from 'prop-types';

const Order = ({ orderedProducts, amount, increment, decrement, clear }) => {
  const totalPrice = useMemo(() => {
    return orderedProducts.reduce(
      (acc, product) => acc + product.price * product.amount,
      0
    );
  }, [orderedProducts, amount]);

  orderedProducts.map(
    (product) => (product.totalPrice = product.amount * product.price)
  );

  return (
    <div className={styles.product}>
      <h2>Order:</h2>
      <div>
        {orderedProducts.map((product) => (
          <div key={product.id}>
            <div className={styles.order_list}>
              <div>
                <h4 className={styles.title}>{product.name}</h4>
                <div className={styles.price}>{product.price} $</div>
              </div>
              <div className={styles.counter}>
                <div>
                  <div className={styles.count} data-id="product-amount">
                    {product.amount}
                  </div>
                  <div className={styles.buttons}>
                    <button
                      className={styles.button}
                      onClick={() => decrement(product)}
                      data-id="product-decrement"
                    >
                      <img src={MinusIcon} alt="minus" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => increment(product)}
                      data-id="product-increment"
                    >
                      <img src={PlusIcon} alt="plus" />
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => clear(product)}
                      data-id="product-clear"
                    >
                      <img src={RemoveIcon} alt="remove" />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.price}>{product.totalPrice} $</div>
            </div>
          </div>
        ))}
      </div>
      <h4>Total: {totalPrice} $</h4>
    </div>
  );
};

Order.propTypes = {
  orderedProducts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }.isRequired)
  ).isRequired,
};

const mapStateToProps = (state) => ({
  orderedProducts: Object.values(state.order).filter((product) => {
    return product.amount > 0;
  }),
});

const mapDispatchToProps = {
  increment,
  decrement,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
