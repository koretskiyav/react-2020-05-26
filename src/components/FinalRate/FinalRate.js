import React from 'react';
import PropTypes from 'prop-types';

const FinalRate = (props) => {
  const { reviews } = props;

  const getFinalRate = (arr) => {
    let rating = 0;
    for (let item of reviews) {
      rating += item.rating;
    }
    return (rating / arr.length).toFixed(1);
  };

  return (
    <div>
      <p>общий рейтинг = {getFinalRate(reviews)}</p>
    </div>
  );
};

FinalRate.propTypes = {
  reviews: PropTypes.array,
};

export default FinalRate;
