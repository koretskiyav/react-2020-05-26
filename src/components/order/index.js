import React, { Fragment, useState, useMemo, useEffect } from 'react';
import styles from './order.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';
import cn from 'classnames';
import { connect } from 'react-redux';
import ProductDetail from './components/ProductDetail';
import { increment, decrement, deleteFromCart } from '../../redux/actions';

const Order = ({ total, products, increment, decrement, deleteFromCart }) => {
  const [shownOrder, toggleShowOrder] = useState(false);
  const toggleOrder = () => {
    toggleShowOrder(!shownOrder);
  };

  useEffect(() => {
    if (total === 0) {
      toggleShowOrder(false);
    }
  }, [total]);

  const totalCost = useMemo(() => {
    return products.reduce((a, { total }) => a + total, 0);
  }, [products]);
  return (
    <div className={cn(styles.orderWrap, { [styles.open]: shownOrder })}>
      <div className={styles.orderTitle}>
        {total === 0 ? (
          <span>cart is empty</span>
        ) : (
          <>
            <span>
              Total cost of your order <b>{totalCost} $</b> (in cart{' '}
              <b>{total}</b>)
            </span>
            <button className={styles.toggler} onClick={toggleOrder}>
              {!shownOrder ? 'show' : 'hide'}
            </button>
          </>
        )}
      </div>
      <div className={styles.orderDetails}>
        {products.map((product) => (
          <Fragment key={product.id}>
            <ProductDetail product={product} />
            <button
              className={styles.button}
              onClick={() => decrement(product)}
              data-id="product-decrement"
              disabled={product.amount === 0}
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
              className={`${styles.alert} ${styles.button}`}
              onClick={() => deleteFromCart(product)}
              title="delete position"
            >
              x
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ order }) => ({
  products: Object.keys(order.products)
    .map((i) => order.products[i])
    .filter((prod) => prod.amount !== 0),
  total: order.total,
});
const mapDispatchToProps = {
  increment,
  decrement,
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
