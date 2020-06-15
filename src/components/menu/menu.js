import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import {productsLoadedSelector, productsLoadingSelector} from "../../redux/selectors";
import Loader from "../loader";
import {loadProducts} from "../../redux/actions";

/*class Menu extends React.Component {
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

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <h1>{this.state.error.message}</h1>;
    }

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
}
*/

const Menu = ({ menu, restaurantId, loadProducts, loading, loaded}) => {

  useEffect((restaurantId) => {
    loadProducts(restaurantId);
  }, [restaurantId]);

  if(loading || !loaded) return <Loader/>;

  return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
              <Product id={id} key={id} />
          ))}
        </div>
        <div>
          <Basket/>
        </div>
      </div>
  )
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state)
});

const mapDispatchToProps = ({
  loadProducts
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
