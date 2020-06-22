import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RestaurantsPage from '../pages/restaurants-page';
import Header from '../header';
import Basket from '../basket';
import { Provider as UserProvider } from '../../contexts/user';
import { Provider as CourseProvider } from '../../contexts/course';

const App = () => {
  const [userName, setName] = useState('Ivan');
  const [is_rur, setCourse] = useState(false);
  const onToggleCourse = () => setCourse(!is_rur);

  useEffect(() => {
    // setInterval(() => setName(Math.random().toString()), 3000);
  }, []);

  return (
    <div>
      <UserProvider value={{ userName, setName }}>
        <CourseProvider value={{ is_rur, onToggleCourse }}>
          <Redirect from="/" to="/restaurants" />
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" render={() => <h1>Error Page</h1>} />
            <Route path="/success" render={() => <h1>Спасибо за заказ!</h1>} />
            <Route path="/" render={() => <div>404 - not found</div>} />
          </Switch>
        </CourseProvider>
      </UserProvider>
    </div>
  );
};
export default App;
