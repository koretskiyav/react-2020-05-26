import React, { useState, useEffect, useMemo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CurrencyProvider } from '../../contexts/currency';
import FailureOrder from '../FailureOrder/FailureOrder';
import ThanksForOrder from '../ThanksForOrder/ThanksForOrder';

const App = () => {
  console.log('Render App'); // при выборе валюты перерендеривается все приложение полностью, такого точно быть не должно
  // кроме того, дополнительный перерендер когда просто кликаешь на выбор валюты в первый раз
  const [userName, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('USD');
  const getPrice = useMemo(
    () => (price) => {
      switch (currency) {
        // case 'USD':
        //   return `${price} $`;
        case 'RUB':
          return `${(price * 69.42).toFixed(0)} ₽`;
        case 'DONG':
          return `${(price * 23265.5).toFixed(0)} ₫`;
        default:
          return `${price} $`;
      }
    },
    [currency]
  );
  // Как вынести эту логику из App, если использовать useState можно только внутри функционального компонента, а доступ к контексту кроме menu, должен получить header?

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
