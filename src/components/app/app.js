import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';
import Paid from '../paid';
const App = () => {
  const [userName, setName] = useState('Ivan');
  const [currentCurrency, setCurrentCurrency] = useState('usd');
  const calculatePrice = (price, currency) =>
    `${(price * currency.value).toFixed(2)} ${currency.symbol} `;
  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <CurrencyProvider
          value={{ currentCurrency, setCurrentCurrency, calculatePrice }}
        >
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/paid" component={Paid} />
            <Route path="/" render={() => <div>404 - not found</div>} />

            <Redirect from="/" to="/restaurants" />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
export default App;
