import React from 'react';

import Star from './star';
import PropTypes from 'prop-types';

const Rate = ({ value }) => (
  <div data-id="rate">
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} data-id="rate-checked" />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number,
};

Rate.defaultProps = {
  value: 0,
};

export default Rate;
