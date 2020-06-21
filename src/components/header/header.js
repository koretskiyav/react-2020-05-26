import React, { useContext } from 'react';

import Logo from './logo';
import styles from './header.module.css';

import userContext from '../../contexts/user';
import Button from "../button";

import { Consumer as CurrencyConsumer } from '../../contexts/currency';
import {DOLLAR, EURO, RUBLE} from "../../contexts/constants";

const Header = () => {
  const { userName, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Andrey')}>
        <CurrencyConsumer>
            { ({ changeCurrency }) => (
                <div className={styles.currency}>
                    <Button secondary icon="dollar" onClick={changeCurrency} data-type={DOLLAR}/>
                    <Button secondary icon="ruble" onClick={changeCurrency} data-type={RUBLE}/>
                    <Button secondary icon="euro" onClick={changeCurrency} data-type={EURO}/>
                </div>
            )}
        </CurrencyConsumer>
        <Logo />
        <h2>{userName}</h2>
    </header>
  );
};

export default Header;
