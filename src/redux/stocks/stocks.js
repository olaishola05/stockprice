/* eslint-disable object-curly-newline */
import axios from 'axios';

const FETCH_STOCKS_SUCCESS = 'stock-price/stocks/FETCH_STOCKS_SUCCESS';
const FETCH_STOCKS_FAIL = 'stock-price/stocks/FETCH_STOCKS_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const BASE_URL = `https://financialmodelingprep.com/api/v3/stock-screener?limit=100&apikey=${API_KEY}`;
const FETCH_START = 'stock-price/stocks/FETCH_START';

const initialState = {
  error: '',
  data: [],
  loading: false,
};

export const america = [];
export const taiwan = [];
export const china = [];
export const AU = [];
export const NL = [];
export const canada = [];
export const ireland = [];
export const switz = [];
export const france = [];
export const britain = [];
export const brazil = [];

const sortCountry = (stocks) => {
  stocks.forEach((item) => {
    if (item.country === 'US') {
      return america.push(item);
    }

    if (item.country === 'TW') {
      return taiwan.push(item);
    }
    if (item.country === 'CN') {
      return china.push(item);
    }
    if (item.country === 'AU') {
      return AU.push(item);
    }

    if (item.country === 'NL') {
      return NL.push(item);
    }
    if (item.country === 'CA') {
      return canada.push(item);
    }

    if (item.country === 'IE') {
      return ireland.push(item);
    }

    if (item.country === 'CH') {
      return switz.push(item);
    }

    if (item.country === 'FR') {
      return france.push(item);
    }

    if (item.country === 'GB') {
      return britain.push(item);
    }

    if (item.country === 'BR') {
      return brazil.push(item);
    }
    return item;
  });
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

export const getStocksFromAPI = () => async (dispatch) => {
  dispatch(fetchState());
  try {
    const response = await axios(BASE_URL);
    dispatch(fetchStocks(response.data));
    sortCountry(response.data);
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

    default:
      return state;
  }
};

export default stockPriceReducer;
