import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import addReview from "./middleware/addReview";

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, addReview))
);
