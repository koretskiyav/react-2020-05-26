import React, {createContext, useState} from 'react';
import {COURSE_EURO, COURSE_RUBLE, DOLLAR, EURO, RUBLE} from "./constants";

export const { Provider, Consumer } = createContext('');

const CurrencyContextProvider = ({children}) => {

    const [currency, setCurrency] = useState(DOLLAR);

    const changeCurrency = (e) => {
        const { type } = e.currentTarget.dataset;

        switch (type) {
            case RUBLE:
                setCurrency(RUBLE);
                break;
            case EURO:
                setCurrency(EURO);
                break;
            default:
                setCurrency(DOLLAR);
                break;
        }
    };

    const calcCurrency = (count) => {
      switch (currency) {
          case RUBLE:
              return `${count * COURSE_RUBLE} ₽`;
          case EURO:
              return `${count * COURSE_EURO} €`;
          default:
              return `${count} $`;
      }
    };

    return (
        <Provider value={ {currency, changeCurrency, calcCurrency} }>
            {children}
        </Provider>
    );
};

export default CurrencyContextProvider;