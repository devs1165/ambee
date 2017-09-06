import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from './reducers'


const middleware = applyMiddleware(promise(), thunk,logger)

const enhancer = compose(
  middleware,
)

const store = createStore(reducer,enhancer)

export default store;