import {applyMiddleware,createStore } from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middlewares = [logger]

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;