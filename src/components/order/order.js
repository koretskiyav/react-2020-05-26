import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';
import OrderItem from '../odrerItem';
import store from '../../redux/store';

const Order = ({ orders }) => {
  const totalSum = useMemo(() => {
    return Object.keys(orders || {}).reduce(
      (acc, id) => acc + orders[id].count * orders[id].price,
      0
    );
  }, [orders]);

  return (
    <div>
      <div>
        {Object.keys(orders)
          .filter((id) => orders[id].count > 0)
          .map((id) => (
            <OrderItem key={id} orderItem={orders[id]} />
          ))}
      </div>
      <div>Total: {totalSum}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  orders: state.order || {},
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
