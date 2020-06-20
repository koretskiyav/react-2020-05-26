import React, { useState, useEffect, useMemo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';

const App = () => {
  console.log('Render App');
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('USD');
  const getPrice = useMemo(
    () => (price) => {
      switch (currency) {
        case 'USD':
          return `${price} $`;
        case 'RUB':
          return `${(price * 69.42).toFixed(0)} ₽`;
        case 'DONG':
          return `${(price * 23265.5).toFixed(0)} ₫`;
      }
    },
    [currency]
  );
  // Наверное нужно как-то вынести эту логику внутрь файла контекста, а не пихать в App, но ругается...

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
