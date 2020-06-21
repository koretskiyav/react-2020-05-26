import React, { useContext } from 'react';
import currencyContext, { currencies } from '../../contexts/currency';
import styles from './toggleCurrentCurrency.module.css';

const ToggleCurrencyButton = () => {
  const { toggleCurrency } = useContext(currencyContext);

  return (
    <div className={styles.togglers}>
      {
        Object.keys(currencies).map((key) =>
          <button
            key={key}
            onClick={toggleCurrency(currencies[key])}
          >
            {currencies[key].display}
          </button>
        )
      }
    </div>
  );
};

export default ToggleCurrencyButton;
