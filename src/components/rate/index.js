import React, { useState } from 'react';
import Active from '../../icons/staractive.png';
import Inactive from '../../icons/starinactive.png';
const Rate = ({ rate = 2, height = 30 }) => {
  const [stars] = useState(new Array(5).fill());
  return (
    <div className="rateBoard" style={{ height: `${height}px` }}>
      {stars.map((star, i) => (
        <img alt="star" src={rate >= i + 1 ? Active : Inactive} />
      ))}
    </div>
  );
};

export default Rate;
