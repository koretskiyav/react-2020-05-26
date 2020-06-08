import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import TrashIcon from './icons/trash.svg';
import { increment, decrement, remove } from '../../redux/actions';
import { getAmountFromState } from '../../redux/helpers';

const Product = ({
  product,
  amount,
  increment,
  decrement,
  remove,
  fetchData,
  showTotal,
  showRemove,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    //eslint-disable-next-line
  }, []);

  const totalSum = useMemo(() => {
    return amount * product.price;
  }, [amount, product.price]);

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
                onClick={() => decrement(product)}
                data-id="product-decrement"
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
              {showRemove && (
                <button
                  className={styles.button}
                  onClick={() => remove(product.id)}
                  data-id="product-remove"
                >
                  <img src={TrashIcon} alt="remove" />
                </button>
              )}
            </div>
            {showTotal && (
              <div className={styles.price}>Total: {totalSum} $</div>
            )}
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
  showTotal: PropTypes.bool,
  showRemove: PropTypes.bool,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
  fetchData: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: getAmountFromState(state.order[ownProps.product.id]),
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
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
