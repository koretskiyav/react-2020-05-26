import React, { useContext } from 'react';
import styles from './currency.module.css';
import CurrencyContext from '../../../contexts/currency';

const Currency = () => {
  const { currency, setCurrency, currencies } = useContext(CurrencyContext);
  return (
    <div className={styles.currency}>
      Change currency
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencies.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Currency;
