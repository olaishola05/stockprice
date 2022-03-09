/* eslint-disable object-curly-newline */
import axios from 'axios';

const FETCH_STOCKS_SUCCESS = 'stock-price/stocks/FETCH_STOCKS_SUCCESS';
const FETCH_STOCKS_FAIL = 'stock-price/stocks/FETCH_STOCKS_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const BASE_URL = `https://financialmodelingprep.com/api/v3/stock-screener?limit=100&apikey=${API_KEY}`;
const FETCH_START = 'stock-price/stocks/FETCH_START';
const SEARCH = 'stock-price/stocks/SEARCH';

const initialState = {
  error: '',
  data: [],
  search: [],
  loading: false,
};

const fetchStocks = (payload) => ({
  type: FETCH_STOCKS_SUCCESS,
  payload,
});

const fetchStocksFail = (payload) => ({
  type: FETCH_STOCKS_FAIL,
  payload,
});

const fetchState = () => ({
  type: FETCH_START,
});

export const search = (payload) => ({
  type: SEARCH,
  payload,
});

export const getStocksFromAPI = () => async (dispatch) => {
  dispatch(fetchState());
  try {
    const response = await axios(BASE_URL);
    dispatch(fetchStocks(response.data));
  } catch (error) {
    const errorMsg = 'Check params for typo';
    dispatch(fetchStocksFail(errorMsg));
  }
};

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: !state.loading };

    case FETCH_STOCKS_SUCCESS:
      return { ...state, data: [...action.payload], loading: !state.loading };

    case FETCH_STOCKS_FAIL:
      return { ...state, loading: !state.loading, error: action.payload };

    case SEARCH:
      return {
        ...state,
        search: [...state.data.filter((stock) => stock.symbol.includes(action.payload))],
        isSearching: !state.isSearching,
      };

    default:
      return state;
  }
};

export default stockPriceReducer;
