import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import {
  Provider as CurrencyProvider,
  currencies,
  getPrice,
} from '../../contexts/currency';
import FailureOrder from '../FailureOrder/FailureOrder';
import ThanksForOrder from '../ThanksForOrder/ThanksForOrder';

const App = () => {
  console.log('Render App'); // при выборе валюты перерендеривается все приложение полностью, как-то можно это оптимизировать?
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState(currencies[0]);

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <CurrencyProvider
          value={{ currency, setCurrency, currencies, getPrice }}
        >
          <Header />
          <Switch>
            <Redirect exact from={'/'} to={'/restaurants'} />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/thanks_for_order" component={ThanksForOrder} />
            <Route path="/error_order" component={FailureOrder} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/" render={() => <div>404 - not found</div>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
export default App;
