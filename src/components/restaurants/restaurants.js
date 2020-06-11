import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {restaurantSelector} from "../../redux/selectors";

const Restaurants = ({ restaurants }) => {


  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant restaurant={restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.array.isRequired
};

export default connect((state) => ({
  restaurants: restaurantSelector(state),
}))(Restaurants);
