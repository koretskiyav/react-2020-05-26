import React, { useContext } from 'react';
import styles from './currency.module.css';
import CurrencyContext from '../../../contexts/currency';

const Currency = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);
  return (
    <div className={styles.currency}>
      Change currency
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value={'USD'}>USD</option>
        <option value={'RUB'}>RUB</option>
        <option value={'DONG'}>DONG</option>
      </select>
    </div>
  );
};

export default Currency;
