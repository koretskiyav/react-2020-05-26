import React from 'react';

export default function ({ rating }) {
  const star = '★';

  return <div>{star.repeat(Math.floor(rating))}</div>;
}
