import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as ConcurrencyProvider } from '../../contexts/currency';

const App = () => {
  const [userName, setName] = useState('Ivan');
  const [concurrency, setConcurrency] = useState({
    current: 'RUB',
    concurrencies: { USD: 1, RUB: 70 },
    signs: { USD: '$', RUB: 'Ꝑ' },
  });

  const validateConcurrency = (amount, spr) => {
    const { concurrencies, current, signs } = spr;

    return `${amount * concurrencies[current]} ${signs[current]}`;
  };

  const setCurrentConcurrency = (concur) => () => {
    setConcurrency((prev) => ({ ...prev, current: concur }));
  };

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <ConcurrencyProvider
          value={{
            concurrency,
            setConcurrency,
            validateConcurrency,
            setCurrentConcurrency,
          }}
        >
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route
              path="/successful_order"
              render={() => <h1>Спасибо за заказ</h1>}
            />
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/" render={() => <div>404 - not found</div>} />
          </Switch>
        </ConcurrencyProvider>
      </UserProvider>
    </div>
  );
};
export default App;
