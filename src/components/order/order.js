import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './order.module.css';
import { increment, decrement, remove } from '../../redux/actions';

const Order = ({ id, order, increment, decrement, remove, values, amount }) => {
  const total = values
    .map((item) => item.price * amount[item.id])
    .reduce((sum, current) => sum + current, 0);

  return (
    <div className={styles.order}>
      {id.map((item) =>
        amount[item] > 0 ? (
          <div key={order[item].id} className={styles.product}>
            <div>{order[item].name}</div>
            <div>{order[item].price}</div>
            <button
              onClick={() =>
                decrement(order[item].id, order[item].name, order[item].price)
              }
            >
              +
            </button>
            <div>{amount[item]}</div>
            <button
              onClick={() =>
                increment(order[item].id, order[item].name, order[item].price)
              }
            >
              -
            </button>
            <button
              onClick={() =>
                remove(order[item].id, order[item].name, order[item].price)
              }
            >
              удалить
            </button>
          </div>
        ) : (
          ''
        )
      )}

      <div>{total}$</div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  id: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  amount: PropTypes.object.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  amount: state.order,
  order: state.order.orders,
  id: Object.keys(state.order.orders),
  values: Object.values(state.order.orders),
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
