import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import Reviews from '../reviews';
import Menu from '../menu';
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route
            path="/restaurants/:restaurantId/reviews"
            component={Reviews}
          />
          <Route path="/restaurants/:restaurantId/menu" component={Menu} />
          <Route path="/" render={() => <div>404 - not found</div>} />
        </Switch>
      </div>
    );
  }
}
