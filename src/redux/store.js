import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import logger from './middleware/logger';
import newReview from './middleware/newReview';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, newReview))
);
