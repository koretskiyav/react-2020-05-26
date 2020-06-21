import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  orderLoadedSelector,
  orderLoadingSelector,
} from '../../redux/selectors';

import { Consumer as UserConsumer } from '../../contexts/user';
import { addOrder } from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  pathname,
  onSubmit,
  loading,
  loaded,
}) {
  const order = orderProducts;
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(order);
  };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  let button;

  if (pathname === '/checkout') {
    button = loading ? (
      <Loader />
    ) : (
      <form onSubmit={handleSubmit}>
        <Button primary block>
          book in
        </Button>
      </form>
    );
  } else {
    button = (
      <Link to="/checkout">
        <Button primary block>
          checkout
        </Button>
      </Link>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        <UserConsumer>{({ userName }) => `${userName}'s basket`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      {button}
    </div>
  );
}

export default connect(
  (state) => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    pathname: state.router.location.pathname,
    loaded: orderLoadedSelector(state),
    loading: orderLoadingSelector(state),
  }),
  (dispatch) => ({
    onSubmit: (orderProducts) => addOrder(orderProducts, dispatch),
  })
)(Basket);
