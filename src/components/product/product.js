import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './product.module.css';
import { increment, decrement } from '../../redux/actions';

import Loader from '../loader';
import Button from '../button';
import { productAmountSelector, productSelector } from '../../redux/selectors';

const Product = ({ product, amount = 0, increment, decrement, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    //eslint-disable-next-line
  }, []);

  if (!product) return <Loader />;

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
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
  fetchData: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: productAmountSelector(state, props),
  product: productSelector(state, props),
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
