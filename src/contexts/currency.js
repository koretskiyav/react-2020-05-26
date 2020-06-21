import { createContext } from 'react';

const currencyContext = createContext();

export const { Consumer, Provider } = currencyContext;

export default currencyContext;
