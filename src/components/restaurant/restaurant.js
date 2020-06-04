import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/menu';
import Reviews from 'components/reviews';
import Banner from 'components/banner';
import Rate from 'components/rate';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

export default Restaurant;
