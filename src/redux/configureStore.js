import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockPriceReducer from './stocks/stocks';

const reducers = combineReducers({
  stocks: stockPriceReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
