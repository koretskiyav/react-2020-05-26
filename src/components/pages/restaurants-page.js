import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Restaurants from '../restaurants';
import Loader from '../loader';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

function RestaurantsPage({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); //eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact && restaurants.length)
    return <Redirect to={`/restaurants/${restaurants[0].id}`} />;

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
  }),
  { loadRestaurants }
)(RestaurantsPage);
