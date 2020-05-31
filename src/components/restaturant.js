import React from 'react';
import Menu from './menu';
import Review from './review';

export default function Restaturant(props) {
  // console.log('props in restaurant.js - ', props.restaurant);

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Review reviews={props.restaurant.reviews} />
    </div>
  );
}
