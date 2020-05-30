import React from 'react';

const Rate = (props) => {
  const { label, rate } = props;

  return <p>{label + rate}</p>;
};

export default Rate;
