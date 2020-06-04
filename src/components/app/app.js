import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  static propTypes = {
    restaurants: PropTypes.arrayOf(),
  };

  // static propTypes = {
  //   menu: PropTypes.arrayOf(
  //     PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  //   ).isRequired,
  // };

  render() {
    console.log(this.props.restaurants);
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
