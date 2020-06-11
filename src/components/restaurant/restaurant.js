import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { avgSelector } from '../../redux/selectors';
const Restaurant = ({ name, menu, reviews, avg, id }) => {
  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews nest={id} reviews={reviews} /> },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={avg} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.string),
  avg: PropTypes.number,
  rest: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  name: state.restaurants[ownProps.id].name,
  menu: state.restaurants[ownProps.id].menu,
  reviews: state.restaurants[ownProps.id].reviews,
  avg: avgSelector(state, ownProps.id),
});

export default connect(mapStateToProps)(Restaurant);
