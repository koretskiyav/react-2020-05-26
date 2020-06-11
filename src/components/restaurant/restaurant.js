import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {averageRatingSelector} from "../../redux/selectors";

const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews } = restaurant;

  /*const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);*/

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} activeRestaurant={restaurant.id} /> },
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
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  averageRating: averageRatingSelector(state, ownProps)
});

export default connect(mapStateToProps)(Restaurant);
