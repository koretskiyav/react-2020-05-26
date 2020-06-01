import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  const { menu, reviews } = props.activeRestaurant;
  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
