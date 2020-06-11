import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      content: <Reviews reviews={reviews} restaurantId={id} />,
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

const mapStateToProps = (state, ownProps) => ({
  name: state.restaurants[ownProps.id].name,
  menu: state.restaurants[ownProps.id].menu,
  reviews: state.restaurants[ownProps.id].reviews,
  averageRating: averageRatingSelector(state, ownProps),
});

export default connect(mapStateToProps)(Restaurant);
