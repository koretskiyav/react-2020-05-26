import React from 'react';

export default function Navigation(props) {
  return (
    <nav>
      {props.restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          className={props.current === restaurant.id ? 'active' : null}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </nav>
  );
}
