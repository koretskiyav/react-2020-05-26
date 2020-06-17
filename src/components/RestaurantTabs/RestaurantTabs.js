import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import { withRouter } from 'react-router-dom';

const RestaurantTabs = ({ match, menu, reviews, restaurantId }) => {
  const { tab } = match.params;

  if (tab === 'menu') {
    return <Menu menu={menu} restaurantId={restaurantId} />;
  }
  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};

RestaurantTabs.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  restaurantId: PropTypes.string.isRequired,
  tab: PropTypes.string,
};

export default withRouter(RestaurantTabs);
