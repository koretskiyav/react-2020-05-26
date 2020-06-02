import React from 'react';

export default function Navigation({ restaurants, onRestaurantClick }) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
