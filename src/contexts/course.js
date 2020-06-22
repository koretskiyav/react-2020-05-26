import { createContext } from 'react';

const context = createContext(false);

export const { Provider, Consumer } = context;

export default context;
