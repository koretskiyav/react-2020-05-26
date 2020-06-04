import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const Rate = ({ value }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        checked={i <= value - 1}
        data-id="star"
        data-attr={i <= value - 1 ? 'fill' : 'empty'}
      />
    ))}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number,
};

export default Rate;
