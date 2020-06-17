import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurant from '../restaurant';

import { restaurantsListSelector } from '../../redux/selectors';

import styles from './restaurants.module.css';

const Restaurants = ({ restaurants, match, history }) => {
  const { restId } = match.params;

  const restaurant = restaurants.find((rest) => rest.id === restId);

  return (
    <>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }, index) => (
          <NavLink
            key={id}
            className={styles.tab}
            activeClassName={styles.active}
            to={`/restaurants/${id}/menu`}
          >
            {name}
          </NavLink>
        ))}
      </div>
      <Restaurant {...restaurant} />,
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
