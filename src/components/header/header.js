import React, { useContext, useMemo } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import concurrencyContext from '../../contexts/currency';

const Header = () => {
  const { userName, setName } = useContext(userContext);
  const { concurrency, setCurrentConcurrency } = useContext(concurrencyContext);
  // в теории useMemo может пригодиться, если будет не 2 языка, а куда больше
  const concurrencyControls = useMemo(
    () => Object.keys(concurrency.concurrencies),
    [concurrency]
  );

  return (
    <header className={styles.header} onClick={() => setName('Andrey')}>
      <Logo />
      {/* тут должен быть отдельный компонент ... */}
      <span className={styles.concurrencyControls}>
        {concurrencyControls.map((concur) => (
          <span onClick={setCurrentConcurrency(concur)}>{concur}</span>
        ))}
      </span>
      <h2>{userName}</h2>
    </header>
  );
};

export default Header;
