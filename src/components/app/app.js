import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import CurrencyContextProvider from "../../contexts/currency";
import OrderError from '../order/order-error';
import OrderSuccess from "../order/order-success";

const App = () => {
  const [userName, setName] = useState('Ivan');

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <CurrencyContextProvider>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/order-success" component={OrderSuccess}/>
            <Route path="/order-error" component={OrderError}/>
            <Redirect from='/' to='/restaurants' />
          </Switch>
        </CurrencyContextProvider>
      </UserProvider>
    </div>
  );
};
export default App;
