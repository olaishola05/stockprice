import axios from 'axios';

const FETCH_STOCKS_SUCCESS = 'stock-price/stocks/FETCH_STOCKS_SUCCESS';
const FETCH_STOCKS_FAIL = 'stock-price/stocks/FETCH_STOCKS_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const BASE_URL = `https://financialmodelingprep.com/api/v3/stock-screener?limit=100&apikey=${API_KEY}`;

const initialState = [];

const fetchStocks = (payload) => ({
  type: FETCH_STOCKS_SUCCESS,
  payload,
});

const fetchStocksFail = (payload) => ({
  type: FETCH_STOCKS_FAIL,
  payload,
});

export const getStocksFromAPI = () => async (dispatch) => {
  try {
    const response = await axios({
      method: 'get',
      url: BASE_URL,
    });
    console.log(response);
    dispatch(fetchStocks(response.data));
  } catch (error) {
    dispatch(fetchStocksFail([]));
  }
};

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_SUCCESS:
      return [...action.payload];
    case FETCH_STOCKS_FAIL:
      return [];

    default:
      return state;
  }
};

export default stockPriceReducer;
