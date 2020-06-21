import React, { useContext } from 'react';
import { getLocation } from 'connected-react-router';
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
  orderToBookSelector,
  orderLoadedSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { bookOrder } from '../../redux/actions';

import ConcurrencyContext from '../../contexts/currency';
import { Consumer as UserConsumer } from '../../contexts/user';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  location,
  orderToBook,
  bookOrder,
  loading,
  loaded,
}) {
  const { concurrency, validateConcurrency } = useContext(ConcurrencyContext);
  const { pathname } = location;

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const handleBook = (order) => (e) => {
    bookOrder(order);
  };

  if (loading) return <Loader />;

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
      <BasketRow
        label="Sub-total"
        content={`${validateConcurrency(total, concurrency)}`}
      />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow
        label="total"
        content={`${validateConcurrency(total, concurrency)}`}
        bold
      />
      {pathname === '/checkout' ? (
        <Button primary block onClick={handleBook(orderToBook)}>
          book
        </Button>
      ) : (
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(
  (state) => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    location: getLocation(state),
    orderToBook: orderToBookSelector(state),
    loading: orderLoadingSelector(state),
    loaded: orderLoadedSelector(state),
  }),
  {
    bookOrder,
  }
)(Basket);
