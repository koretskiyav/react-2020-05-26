import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Restaurants from '../restaurants';
import Loader from '../loader';

import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
  firstRestaurantSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

function RestaurantsPage({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
  firstRestaurant,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); //eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return (
      <>
        <Restaurants match={match} history={history} />
        {/*<h2 style={{ textAlign: 'center' }}>Select restaurant</h2>*/}
        <Redirect to={`/restaurants/${firstRestaurant}`} />
      </>
    );
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),
    firstRestaurant: firstRestaurantSelector(state),
  }),
  { loadRestaurants }
)(RestaurantsPage);
