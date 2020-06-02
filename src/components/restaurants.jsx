import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './restaraunt';

export default function Restaurants({ restaurants }) {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () =>
      restaurants.find((restaurant) => restaurant.id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant {...activeRestaurant} />
    </div>
  );
}
