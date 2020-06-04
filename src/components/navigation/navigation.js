import React from 'react';
import styles from './navigation.module.css';
import PropTypes, {shape} from 'prop-types';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired }).isRequired).isRequired,
  onRestaurantClick: PropTypes.func,
}

export default Navigation;
