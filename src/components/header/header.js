import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import CurrencyContext from '../../contexts/currency';

const Header = () => {
  const { userName, setName } = useContext(userContext);
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <header className={styles.header} onClick={() => setName('Andrey')}>
      <Logo />
      <div className={styles.currency}>
        Change currency
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value={'USD'}>USD</option>
          <option value={'RUB'}>RUB</option>
          <option value={'DONG'}>DONG</option>
        </select>
      </div>
      <h2>{userName}</h2>
    </header>
  );
};

export default Header;
