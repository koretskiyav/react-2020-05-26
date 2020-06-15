import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import {
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
    arrRestaurantId: new Set(),
    // в редьюсере данные не меняются, а добавляются, здесь в локальном стейте накапливаются значения переданных restaurantId, если такое значение есть в массиве, то данные заново загружаться не будут. А теперь с удовольствием посмотрю как это делают на самом деле :)
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { loadProducts, restaurantId } = this.props;
    this.setState(() => ({
      arrRestaurantId: this.state.arrRestaurantId.add(restaurantId),
    }));
    loadProducts(restaurantId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { loadProducts, restaurantId } = this.props;
    if (this.state.arrRestaurantId.has(restaurantId)) {
      return null;
    }
    if (prevProps.restaurantId !== restaurantId) {
      this.setState(() => ({
        arrRestaurantId: this.state.arrRestaurantId.add(restaurantId),
      }));
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
  }),
  { loadProducts }
)(Menu);
