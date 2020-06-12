import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {
  restaurantItemSelector,
  restaurantsSelector,
} from '../../redux/selectors';

const Restaurants = ({ restaurants, restaurantItem }) => {
  const tabs = restaurants.map((id) => ({
    title: restaurantItem[id].name,
    content: <Restaurant id={id} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state),
  restaurantItem: restaurantItemSelector(state),
}))(Restaurants);
