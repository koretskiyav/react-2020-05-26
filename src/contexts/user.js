import { createContext } from 'react';

const context = createContext('default user');

export const { Provider, Consumer } = context;

export default context;
