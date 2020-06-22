import React, { useContext } from 'react';
import currencyContext from '../../../contexts/currency';

import styles from './currencyDropdown.module.css';

export default () => {
  const { currentCurrency, setCurrentCurrency } = useContext(currencyContext);

  return (
    <select
      className={styles.dropdown}
      onChange={({ target }) => setCurrentCurrency(target.value)}
      value={currentCurrency}
    >
      <option value="usd">$</option>
      <option value="rub">₽</option>
      <option value="eur">€</option>
    </select>
  );
};
