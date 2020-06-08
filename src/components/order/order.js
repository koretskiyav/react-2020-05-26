import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';

function Order({ increment, decrement, remove, orders }) {
  /* По основной задумке тут мемоизация бесполезна,
   * так как обычно эти данные всегда либо новые,
   * либо постоянно меняются.
   */

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>amount</th>
            <th>total</th>
            <th>-</th>
            <th>+</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(orders)
            .filter((order) => order)
            .filter((order) => order.amount > 0)
            .map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.price} $</td>
                <td>{order.amount}</td>
                <td>{order.price * order.amount} $</td>
                <td>
                  <button onClick={() => decrement(order)}>-</button>
                </td>
                <td>
                  <button onClick={() => increment(order)}>+</button>
                </td>
                <td>
                  <button onClick={() => remove(order)}>del</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1>
        Total prise :{' '}
        {Object.values(orders)
          .filter((order) => order)
          .filter((order) => order.amount > 0)
          .reduce((a, v) => a + v.price * v.amount, 0)}
      </h1>
    </div>
  );
}

Order.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  orders: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }),
};

const mapStatetoProps = (state) => ({ orders: state.order });

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Order);
