import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import currencyContext from '../../contexts/currency';
import Loader from '../loader';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  currenciesSelector,
  orderLoadedSelector,
  orderLoadingSelector,
} from '../../redux/selectors';

import { Consumer as UserConsumer } from '../../contexts/user';
import { payOrder } from '../../redux/actions';

function Basket({
  currencies,
  title = 'Basket',
  dest,
  total,
  tryToPay,
  orderProducts,
  orderLoaded,
  orderLoading,
}) {
  const { currentCurrency, calculatePrice } = useContext(currencyContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }
  if (orderLoading) return <Loader />;
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
              subtotal={calculatePrice(subtotal, currencies[currentCurrency])}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow
        label="Sub-total"
        content={`${calculatePrice(total, currencies[currentCurrency])} `}
      />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow
        label="total"
        content={`${calculatePrice(total, currencies[currentCurrency])} `}
        bold
      />

      {dest === '/checkout' ? (
        <Button primary block onClick={() => tryToPay(orderProducts)}>
          pay order
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
  (state, props) => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    currencies: currenciesSelector(state),
    dest: state.router.location.pathname,
    orderLoaded: orderLoadedSelector(state),
    orderLoading: orderLoadingSelector(state),
  }),
  (dispatch) => ({
    tryToPay: (orderProducts) => payOrder(orderProducts, dispatch),
  })
)(Basket);
