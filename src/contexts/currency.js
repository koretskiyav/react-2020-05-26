import {createContext} from 'react';

export const currencies = {
  ru: {
    value: 69.5,
    display: 'RU',
    sign: '₽'
  },
  usd: {
    value: 1,
    display: 'USD',
    sign: '$'
  },
  eur: {
    value: 0.89,
    display: 'EUR',
    sign: '€'
  }
};

const context = createContext(currencies.usd);

export const { Consumer, Provider } = context;

export default context;
