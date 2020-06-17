import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { Switch, Route, Link } from 'react-router-dom';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  const tabs = [
    {
      title: 'Menu',
      linkTo: `/restaurants/${id}/menu`,
    },
    {
      title: 'Reviews',
      linkTo: `/restaurants/${id}/reviews`,
    },
  ];

  return (
    <>
      <div>
        <Banner heading={name}>
          {!!averageRating && <Rate value={averageRating} />}
        </Banner>
        <Tabs tabs={tabs} />
      </div>
      <Route
        path={`/restaurants/${id}/menu`}
        component={() => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        path={`/restaurants/${id}/reviews`}
        component={() => <Reviews reviews={reviews} restaurantId={id} />}
      />
    </>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
