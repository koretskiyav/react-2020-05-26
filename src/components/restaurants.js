import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Restaurant from './restaurant';
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
    <div className="wrap">
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant rest={activeRestaurant} />
    </div>
  );
}
