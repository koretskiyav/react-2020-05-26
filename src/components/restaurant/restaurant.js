import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';

import { averageRatingSelector } from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating, url }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          to={`${url}/menu`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Route
        path={`${url}/menu`}
        render={() => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        path={`${url}/reviews`}
        render={() => <Reviews reviews={reviews} restaurantId={id} />}
      />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
