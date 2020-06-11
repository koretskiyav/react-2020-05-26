import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const restaurantsKeys = Object.keys(restaurants);

  const tabs = restaurantsKeys.map((restaurantsId) => ({
    title: restaurants[restaurantsId].name,
    content: <Restaurant restaurant={restaurants[restaurantsId]} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
