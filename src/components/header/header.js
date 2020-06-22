import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import Logo from './logo';
import styles from './header.module.css';
import CurrencyDropdown from './currencyDropdown';
import userContext from '../../contexts/user';
import {
  currencySelector,
  currencyLoadingSelector,
  currencyLoadedSelector,
} from '../../redux/selectors';
import { loadCurrency } from '../../redux/actions';
const Header = ({ currency, loadCurrency, loading, loaded }) => {
  const { userName, setName } = useContext(userContext);

  useEffect(() => {
    if (!loading && !loaded /* loadCurrency() */);
  }, []); //eslint-disable-line
  return (
    <header className={styles.header} onClick={() => setName('Andrey')}>
      <CurrencyDropdown />
      <Logo />
      <div>{userName}</div>
    </header>
  );
};

export default connect(
  (state) => ({
    currency: currencySelector(state),
    loading: currencyLoadingSelector(state),
    loaded: currencyLoadedSelector(state),
  }),
  { loadCurrency }
)(Header);
