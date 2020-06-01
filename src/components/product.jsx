import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';

function Product({ count, decrement, increment, product }) {
  return (
    <div style={{ border: 'dotted', margin: 2 }}>
      <p>
        <strong>Name: </strong>
        {product.name}
      </p>
      <p>
        <strong>Price: </strong>
        {product.price} $
      </p>
      <button onClick={decrement} disabled={count <= 0}>
        <img src={minus} alt="minus" />
      </button>
      {count}
      <button onClick={increment}>
        <Plus />
      </button>
    </div>
  );
}

export default counter(Product);
