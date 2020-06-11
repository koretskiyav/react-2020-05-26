import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  menuSelector,
  nameSelector,
  reviewsSelector,
} from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  // там где я достаю id из props только в селекторах, IDE ругается на неиспользуемую переменную... Забить на это?

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} /> },
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.string).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect((state, ownProps) => ({
  name: nameSelector(state, ownProps),
  menu: menuSelector(state, ownProps),
  reviews: reviewsSelector(state, ownProps),
  averageRating: averageRatingSelector(state, ownProps),
}))(Restaurant);
