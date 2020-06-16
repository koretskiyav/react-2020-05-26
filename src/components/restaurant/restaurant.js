import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  arrRestaurantIdReviewsSelector,
  averageRatingSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  arrRestaurantId,
}) => {
  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!arrRestaurantId.includes(id) ? null : <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
    </div>
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
  loadingReviews: reviewsLoadingSelector(state),
  loadedReviews: reviewsLoadedSelector(state),
  averageRating: averageRatingSelector(state, props),
  arrRestaurantId: arrRestaurantIdReviewsSelector(state),
}))(Restaurant);
