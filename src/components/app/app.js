import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';

const App = () => {
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('USD');
  const getPrice = (price) => {
    if (currency === 'USD') {
      return `${price} $`;
    } else if (currency === 'RUB') {
      return `${(price * 69.42).toFixed(0)} ₽`;
    } else if (currency === 'DONG') {
      return `${(price * 23265.5).toFixed(0)} ₫`;
    }
  };
  // Наверное нужно перенести эту логику внутри файла контекста, а не пихать в App, но ругается...

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <CurrencyProvider value={{ currency, setCurrency, getPrice }}>
          <Header />
          <Switch>
            <Redirect exact from={'/'} to={'/restaurants'} />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/" render={() => <div>404 - not found</div>} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
export default App;
