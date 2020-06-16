import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import {
  arrRestaurantIdProductsSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
    ).isRequired,
  };

  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { loadProducts, restaurantId, arrRestaurantId } = this.props;
    if (arrRestaurantId.includes(restaurantId)) {
      return null;
    }
    loadProducts(restaurantId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { loadProducts, restaurantId, arrRestaurantId } = this.props;
    if (arrRestaurantId.includes(restaurantId)) {
      return null;
    }
    if (prevProps.restaurantId !== restaurantId) {
      loadProducts(restaurantId);
    }
  }

  render() {
    const { menu, productsLoading, productsLoaded } = this.props;

    if (this.state.error) {
      return <h1>{this.state.error.message}</h1>;
    }

    if (productsLoading || !productsLoaded) return <Loader />;

    return (
      <div className={styles.menu}>
        {!productsLoading && (
          <div>
            {menu.map((id) => (
              <Product key={id} id={id} />
            ))}
          </div>
        )}
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state) => ({
    productsLoading: productsLoadingSelector(state),
    productsLoaded: productsLoadedSelector(state),
    arrRestaurantId: arrRestaurantIdProductsSelector(state),
  }),
  { loadProducts }
)(Menu);
