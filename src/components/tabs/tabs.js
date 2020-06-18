import React from 'react';
import PropTypes from 'prop-types';

import styles from './tabs.module.css';

import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => {
  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, linkTo }) => (
          <NavLink
            key={title}
            className={styles.tab}
            activeClassName={styles.active}
            to={linkTo}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
        linkTo: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
