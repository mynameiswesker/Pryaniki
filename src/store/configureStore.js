import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));