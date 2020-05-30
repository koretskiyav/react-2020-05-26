import React, { useState, useMemo } from 'react';

import Navigation from './navigation';
import Restoraunt from './Restaurant';

export default function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  );

  const activeRestaurant = useMemo(
    () =>
      props.restaurants.find((restaurant) => {
        return restaurant.id === activeRestaurantId;
      }),
    [activeRestaurantId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restoraunt restorauntData={activeRestaurant} />
    </div>
  );
}
