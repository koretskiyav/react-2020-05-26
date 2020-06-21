import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import generateId from './middleware/generateId';
import api from './middleware/api';
import history from '../history';
import orderRequest from "./middleware/orderRequest";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
  api,
  orderRequest,
  generateId,
  logger
);

export default createStore(reducer, composeWithDevTools(enhancer));
