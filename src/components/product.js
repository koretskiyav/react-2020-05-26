import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';
import Minus from '../icons/minus';

function Product(props) {
  const { count, decrement, increment } = props;

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>
        <Minus />
      </button>
      {count}
      <button onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
