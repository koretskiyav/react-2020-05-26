import React from 'react';
import PropTypes from 'prop-types';
import Rate from '../Rate/Rate';

const Reviews = (props) => {
  const { reviews } = props;
  return (
    <div>
      {reviews.map((item) => {
        return <Rate key={item.id} reviews={item} />;
      })}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;
