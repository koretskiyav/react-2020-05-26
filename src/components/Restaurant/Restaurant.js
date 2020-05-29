import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../Reviews/Reviews';
import FinalRate from '../FinalRate/FinalRate';
import styles from './Restaurant.module.scss';

const Restaurant = (props) => {
  const { menu, reviews } = props;
  return (
    <div className={styles.root}>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <FinalRate reviews={reviews} />
    </div>
  );
};

Restaurant.propTypes = {
  menu: PropTypes.array,
  reviews: PropTypes.array,
};

export default Restaurant;
