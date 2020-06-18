import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { NavLink, Route } from 'react-router-dom';
import styles from '../restaurants/restaurants.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          className={styles.tab}
          to={`/restaurants/${id}/menu`}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          className={styles.tab}
          to={`/restaurants/${id}/review`}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Route
        path={`/restaurants/${id}/menu`}
        render={() => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        path={`/restaurants/${id}/review`}
        render={() => <Reviews reviews={reviews} restaurantId={id} />}
      />
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

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
