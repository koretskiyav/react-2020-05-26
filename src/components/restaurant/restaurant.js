import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './restaurant.module.css';

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
          menu
        </NavLink>
        <NavLink
          className={styles.tab}
          activeClassName={styles.active}
          to={`/restaurants/${id}/reviews`}
        >
          reviews
        </NavLink>
        {/* нормальная ли практика использовать свич в таком месте? */}
        <Switch>
          <Route
            path="/restaurants/:restaurantId/reviews"
            render={() => (
              <Reviews reviews={reviews} restaurantId={id}>
                404 - not found
              </Reviews>
            )}
          />
          <Route
            path="/restaurants/:restaurantId/menu"
            render={() => <Menu menu={menu} restaurantId={id} />}
          />
        </Switch>
      </div>
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
