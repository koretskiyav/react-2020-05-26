import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';
import ToggleCurrencyButton from '../toggle-currency-button';

import userContext from '../../contexts/user';


const Header = () => {
  const { userName, setName } = useContext(userContext);

  return (
    <header className={styles.header}>
      <ToggleCurrencyButton />
      <Logo />
      <h2 onClick={() => setName('Andrey')}>{userName}</h2>
    </header>
  );
};

export default Header;
