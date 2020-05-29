import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
