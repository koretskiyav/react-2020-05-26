import Loader from '../loader';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../product';
import styles from './menu.module.css';
import Basket from '../basket';

import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';

function Menu({ menu, restaurantId, loadProducts, loading, loaded }) {
  useEffect(() => {
    loadProducts(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  restaurantId: PropTypes.string.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadProducts })(Menu);
