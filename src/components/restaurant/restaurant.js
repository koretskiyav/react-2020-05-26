import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../restaurants/restaurants.module.css';
import RestaurantTabs from '../RestaurantTabs/RestaurantTabs';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          className={styles.tab}
          activeClassName={styles.active}
          to={`/restaurants/${id}/menu`}
        >
          Menu
        </NavLink>
        <NavLink
          className={styles.tab}
          activeClassName={styles.active}
          to={`/restaurants/${id}/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <RestaurantTabs menu={menu} reviews={reviews} restaurantId={id} />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default withRouter(
  connect((state, props) => ({
    averageRating: averageRatingSelector(state, props),
  }))(Restaurant)
);
