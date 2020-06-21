import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {orderProductsSelector, orderSubmitLoadingSelector, totalSelector} from '../../redux/selectors';

import { Consumer as UserConsumer } from '../../contexts/user';

import { Consumer as CurrencyConsumer } from '../../contexts/currency';
import {orderSubmit} from "../../redux/actions";
import Loader from "../loader";

function Basket({ title = 'Basket', total, orderProducts, pathname, onSubmit, orderSubmitLoading }) {

    const handleSubmit = () => {
        const order = orderProducts.map(({ product, amount}) => ({
            id: product.id,
            amount: amount,
        }));
        onSubmit(order);
    };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if(orderSubmitLoading) return <Loader/>;

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
        <CurrencyConsumer>
            { ({calcCurrency}) => <BasketRow label="Sub-total" content={ calcCurrency(total) } /> }
        </CurrencyConsumer>
      <BasketRow label="Delivery costs:" content="FREE" />
        <CurrencyConsumer>
            { ({calcCurrency}) => <BasketRow label="total" content={ calcCurrency(total) } bold /> }
        </CurrencyConsumer>
        {(pathname !== '/checkout') ? (
            <Link to="/checkout">
                <Button primary block>
                    checkout
                </Button>
            </Link>
        ) : ( <Button primary block type="submit" onClick={handleSubmit}>buy now</Button> ) }

    </div>
  );
}

const mapStateToProps = (state) => ({
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    pathname: state.router.location.pathname,
    orderSubmitLoading: orderSubmitLoadingSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
   onSubmit: (order) =>  dispatch(orderSubmit(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
