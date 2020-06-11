import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.keys(restaurants).map((id) => ({
    title: restaurants[id].name,
    content: <Restaurant id={id} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    // объект с ключами id (как их описать?)
  }).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state),
}))(Restaurants);
