import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  console.log('tabs', tabs);

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, linkTo }) => (
          <NavLink
            to={linkTo}
            key={title}
            className={styles.tab}
            activeClassName={styles.active}
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
    }).isRequired
  ).isRequired,
};

export default Tabs;
