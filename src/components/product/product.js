import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import { increment, decrement } from '../../redux/actions';

const Product = ({ product, amount, increment, decrement, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    //eslint-disable-next-line
  }, []);

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
              <button
                className={styles.button}
                onClick={() => decrement(product.id, product)}
                data-id="product-decrement"
              >
                <img src={MinusIcon} alt="minus" />
              </button>
              <button
                className={styles.button}
                onClick={() => increment(product.id, product)}
                data-id="product-increment"
              >
                <img src={PlusIcon} alt="plus" />
              </button>
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
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  fetchData: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

// const mapDispatchToProps = {
//   onIncrement: increment,
//   onDecrement: decrement,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: () => dispatch(increment()),
//   onDecrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Product);
