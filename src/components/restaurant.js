import React from 'react';
import Reviews from './reviews';
import Menu from './menu';

const Restaurant = (props) => {
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
