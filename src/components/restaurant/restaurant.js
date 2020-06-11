import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ name, menu, reviews, averageRating, id }) => {
  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews restaurantId={id} reviews={reviews} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(PropTypes.string),
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, { id }) => ({
  name: state.restaurants[id].name,
  menu: state.restaurants[id].menu,
  reviews: state.restaurants[id].reviews,
  averageRating: averageRatingSelector(state, id),
});

export default connect(mapStateToProps)(Restaurant);
