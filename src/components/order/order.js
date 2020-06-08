import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import PropTypes from 'prop-types';
import CartImg from './cart.svg';
import styles from './order.module.css';

import Product from '../product';
import { increment, decrement } from '../../redux/actions';
import toggle from '../../hocs/toggle';

const Order = ({ isToggled, toggle, orderedProducts, total }) => {
  const overviewClass = useMemo(() => {
    return classNames({
      [styles.order__overview]: true,
      [styles.order__overview_open]: isToggled,
    });
  }, [isToggled]);

  return (
    <div className={styles.order}>
      <div className={styles.order__wrapper}>
        <div className={overviewClass} onClick={toggle}>
          <img className={styles.order__img} src={CartImg} alt="cart" />
          <div className={styles.order__total}>{total} $</div>
        </div>

        {isToggled && !!orderedProducts.length && (
          <div className={styles.order__details}>
            {orderedProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                showTotal
                showRemove
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Order.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  orderedProducts: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  const orderedProducts = Object.values(state.order).filter(
    (product) => product.amount > 0
  );

  const total = orderedProducts.reduce((sum, current) => {
    return sum + current.price * current.amount;
  }, 0);

  return {
    orderedProducts,
    total,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

const OrderComponent = toggle(Order);

export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
