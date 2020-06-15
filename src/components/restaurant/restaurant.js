import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';
import { loadReviews } from '../../redux/actions';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  loadReviews,
  loadingReviews,
  loadedReviews,
}) => {
  useEffect(() => {
    loadReviews(id);
  }, [id]); //eslint-disable-line

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
        {loadingReviews || !loadedReviews ? (
          <Loader />
        ) : (
          <Rate value={averageRating} />
        )}
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

export default connect(
  (state, props) => ({
    loadingReviews: reviewsLoadingSelector(state),
    loadedReviews: reviewsLoadedSelector(state),
    averageRating: averageRatingSelector(state, props),
  }),
  {
    loadReviews,
  }
)(Restaurant);
