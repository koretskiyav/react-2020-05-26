import React from 'react';
import { connect } from 'react-redux';

import { orderSelectorError } from '../../redux/selectors';

function ErrorOrderPage({ error, match }) {
  if (match.isExact) {
    return <h1>{error ? error : 'error page default'}</h1>;
  }
}

export default connect((state) => ({ error: orderSelectorError(state) }))(
  ErrorOrderPage
);
