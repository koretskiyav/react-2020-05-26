import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  if (!id) return null;

  const tabs = [
    { title: 'Menu', to: `/restaurants/${id}/menu` },
    { title: 'Reviews', to: `/restaurants/${id}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Switch>
        <Route
          path="/restaurants/:restId/menu"
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path="/restaurants/:restId/reviews"
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
        <Redirect from="/restaurants/:restId" to={`/restaurants/${id}/menu`} />
      </Switch>
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
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
