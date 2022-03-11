import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import stockPriceReducer from './stocks/stocks';
import topGainersReducer from './stocks/trending';
import symbolDetailReducer from './stocks/details';

const reducers = combineReducers({
  stocks: stockPriceReducer,
  gainers: topGainersReducer,
  profile: symbolDetailReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
