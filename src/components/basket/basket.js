import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import courseContext from '../../contexts/course';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  basketSelector,
} from '../../redux/selectors';
import { onCheckout } from '../../redux/actions';

import { Consumer as UserConsumer } from '../../contexts/user';
import Loader from '../loader';
import { printPrice } from '../../redux/utils';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  onCheckout,
  block,
  error,
}) {
  const { is_rur } = useContext(courseContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (block) return <Loader />;

  return (
    <div className={styles.basket}>
      {error && (
        <h4 className={styles.title} style={{ color: 'red' }}>
          {error}
        </h4>
      )}
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
      <BasketRow label="Sub-total" content={printPrice(is_rur, total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={printPrice(is_rur, total)} bold />
      <Link to="/checkout">
        <Button primary block onClick={onCheckout}>
          checkout
        </Button>
      </Link>
    </div>
  );
}

export default connect(
  (state) => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    ...basketSelector(state),
  }),
  { onCheckout }
)(Basket);
