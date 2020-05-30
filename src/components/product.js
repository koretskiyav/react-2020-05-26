import React from 'react';
import counter from '../hocs/counter';

import minus from '../icons/minus.svg';
import Plus from '../icons/plus';

function Product(props) {
  const { count, decrement, increment } = props;

  return (
    <div className="product">
      <div className="product-name">{props.product.name}</div>

      <h4>Ingredients:</h4>
      <div className="product-ingredients">
        {props.product.ingredients.map((ing, i) => (
          <span key={i} className="ingredient">
            {ing}
          </span>
        ))}
      </div>

      <div className="product-contorls">
        <span className="product-price">price: {props.product.price}.$</span>
        <button onClick={decrement}>
          <img src={minus} alt="minus" />
        </button>
        at cart: {count}
        <button onClick={increment}>
          <Plus />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
