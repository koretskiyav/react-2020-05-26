import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import ErrorOrderPage from '../pages/error-order-page';

const App = () => {
  const [userName, setName] = useState('Ivan');

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Route path="/success" render={() => <h1>Thank you for order!</h1>} />
          <Route path="/orderError" component={ErrorOrderPage} />
          <Redirect from="/" to="/restaurants" />
        </Switch>
      </UserProvider>
    </div>
  );
};
export default App;
