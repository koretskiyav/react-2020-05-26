import React, { useContext } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './product.module.css';
import { increment, decrement } from '../../redux/actions';
import currencyContext from '../../contexts/currency';
import Button from '../button';
import {
  productAmountSelector,
  productSelector,
  priceSelector,
} from '../../redux/selectors';

const Product = ({ product, amount = 0, price, increment, decrement }) => {
  const { currentCurrency } = useContext(currencyContext);

  if (!product) return null;

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{price} </div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => decrement(product.id)}
                data-id="product-decrement"
                icon="minus"
              />
              <Button
                onClick={() => increment(product.id)}
                data-id="product-increment"
                icon="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: productAmountSelector(state, props),
  product: productSelector(state, props),
  price: priceSelector(state, props),
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
