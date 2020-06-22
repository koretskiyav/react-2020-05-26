import { createContext } from 'react';

const currencyContext = createContext('usd');

export const { Consumer, Provider } = currencyContext;

export default currencyContext;
