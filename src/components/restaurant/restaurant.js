import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating, url }) => {
  const lastUrlCharIsSlash = url.slice(-1) === '/';

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <div>
        <NavLink to={`${url}${lastUrlCharIsSlash ? '' : '/'}menu`}>
          Menu
        </NavLink>
        <NavLink to={`${url}${lastUrlCharIsSlash ? '' : '/'}reviews`}>
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route
          path={`${url}/menu`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path={`${url}/reviews`}
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
        <Route
          path={`${url}`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
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
  url: PropTypes.string.isRequired,
};

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
}))(Restaurant);
