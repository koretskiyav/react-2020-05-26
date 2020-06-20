import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';
import Tabs from '../tabs';

import { restaurantsListSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants, match, history }) => {
  const { restId } = match.params;

  const restaurant = restaurants.find((rest) => rest.id === restId);

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/menu`,
  }));

  return (
    <>
      <Tabs tabs={tabs} />
      <Restaurant {...restaurant} />
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsListSelector(state),
}))(Restaurants);
