import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Reviews from './reviews';
import Rate from './rate';

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
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
      <Rate rate={activeRestaurant.reviews} />
    </div>
  );
}
