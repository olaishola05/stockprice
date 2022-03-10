import axios from 'axios';

const FETCH_TOP_GAINERS_STOCKS_SUCCESS = 'stock-price/stocks/FETCH_TOP_GAINERS_STOCKS_SUCCESS';
const FETCH_TOP_GAINERS_STOCKS_FAIL = 'stock-price/stocks/FETCH_TOP_GAINERS_STOCKS_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const BASE_URL = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${API_KEY}`;
const FETCH_START = 'stock-price/stocks/FETCH_START';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  item: '',
};

const fetchTopGainersStocks = (payload) => ({
  type: FETCH_TOP_GAINERS_STOCKS_SUCCESS,
  payload,
});

const fetchTopGainersStocksFail = (payload) => ({
  type: FETCH_TOP_GAINERS_STOCKS_FAIL,
  payload,
});

const fetchState = () => ({
  type: FETCH_START,
});

export const getRandom = (payload) => ({
  type: 'RANDOM',
  payload,
});

export const randomGainer = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getTopGainersStocksFromAPI = () => async (dispatch) => {
  dispatch(fetchState());
  try {
    const response = await axios(BASE_URL);
    dispatch(fetchTopGainersStocks(response.data));
  } catch (error) {
    const errorMsg = error.toString();
    dispatch(fetchTopGainersStocksFail(errorMsg));
  }
};

const topGainersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isLoading: !state.isLoading };

    case FETCH_TOP_GAINERS_STOCKS_SUCCESS:
      return { ...state, data: [...action.payload], isLoading: !state.isLoading };

    case FETCH_TOP_GAINERS_STOCKS_FAIL:
      return { ...state, isLoading: !state.isLoading, error: action.payload };

    case 'RANDOM':
      return { ...state, item: { ...action.payload } };

    default:
      return state;
  }
};

export default topGainersReducer;
