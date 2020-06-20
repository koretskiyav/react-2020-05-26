import { createContext } from 'react';

const CurrencyContext = createContext();

export const { Provider, Consumer } = CurrencyContext;

export default CurrencyContext;
