import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';

function Product(props) {
  const { count, decrement, increment } = props;
  console.log(props);

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>
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
