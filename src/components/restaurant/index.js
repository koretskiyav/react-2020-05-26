import React from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Rate from '../rate';

const Restaurant = ({ rest }) => {
  return (
    <main>
      <section>
        <div className="head">
          <h1>Menu</h1>
        </div>

        <Menu menu={rest.menu} />
      </section>
      <section>
        <div className="head">
          <h1>Reviews </h1>{' '}
          <div>
            <span>average rate</span>
            <Rate
              rate={
                rest.reviews.reduce((t, c) => t + c.rating, 0) /
                rest.reviews.length
              }
            />
          </div>
        </div>

        <Reviews reviews={rest.reviews} />
      </section>
    </main>
  );
};

export default Restaurant;
