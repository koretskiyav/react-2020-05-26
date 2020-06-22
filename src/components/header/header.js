import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import courseContext from '../../contexts/course';

const Header = () => {
  const { userName, setName } = useContext(userContext);
  const { is_rur, onToggleCourse } = useContext(courseContext);

  return (
    <header className={styles.header}>
      <Logo />
      <button onClick={onToggleCourse}>{is_rur ? 'to USD' : 'to RUR'}</button>
      <h2 onClick={() => setName('Andrey')}>{userName}</h2>
    </header>
  );
};

export default Header;
