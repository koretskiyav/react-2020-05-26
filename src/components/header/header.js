import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import Currency from './currency/currency';

const Header = () => {
  const { userName, setName } = useContext(userContext);
  return (
    // <header className={styles.header} onClick={() => setName('Andrey')}>
    // отключил чтобы не было перерендера, когда я просто выбираю валюту
    <header className={styles.header}>
      <Logo />
      <Currency />
      <h2>{userName}</h2>
    </header>
  );
};

export default Header;
