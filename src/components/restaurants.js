import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './Restaurant/Restaurant';
import img from '../assets/img/HT1.png';

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find(
        (restaurant) => restaurant.id === activeRestaurantId
      ),
    [activeRestaurantId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
      <p style={{ borderTop: '2px solid black' }}>Как я понял задачу:</p>
      <img src={img} alt={'img'} style={{ width: '100%' }} />
    </div>
  );
}
