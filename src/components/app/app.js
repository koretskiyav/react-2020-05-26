import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from 'components/restaurants';
import Header from 'components/header';

class App extends PureComponent {
  render() {
    const { restaurants } = this.props;

    return (
      <div>
        <Header />
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

export default App;
