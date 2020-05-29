import React from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
const Restaurant = ({ rest }) => {
  return (
    <main>
      <section>
        <h1>Menu</h1>
        <Menu menu={rest.menu} />
      </section>
      <section>
        <h1>Reviews</h1>
        <Reviews reviews={rest.reviews} />
      </section>
    </main>
  );
};

export default Restaurant;
