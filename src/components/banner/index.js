import React from 'react';

import styles from './banner.module.css';

import DefaultBanner from './banner.jpg';
import PropTypes from 'prop-types';

const Banner = ({ img, heading, description, children }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  </div>
);

Banner.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Banner.defaultProps = {
  img: DefaultBanner,
  description: '',
};

export default Banner;
