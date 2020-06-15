import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';
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
    this.props.loadProducts();
  }

  render() {
    const { loading, loaded } = this.props.menuFetch;
    const { menu } = this.props;

    if (this.state.error) {
      return <h1>{this.state.error.message}</h1>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {loading && <Loader />}
          {loaded && menu.map((id) => <Product key={id} id={id} />)}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  menuFetch: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  menuFetch: store.products,
});

export default connect(mapStateToProps, { loadProducts })(Menu);
