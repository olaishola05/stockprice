import axios from 'axios';

const FETCH_STOCKS_SUCCESS = 'stock-price/stocks/FETCH_STOCKS_SUCCESS';
const FETCH_STOCKS_FAIL = 'stock-price/stocks/FETCH_STOCKS_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const BASE_URL = `https://financialmodelingprep.com/api/v3/stock-screener?limit=100&apikey=${API_KEY}`;
const FETCH_START = 'stock-price/stocks/FETCH_START';

const initialState = {
  error: false,
  data: [],
  loading: false,
};

const fetchStocks = (payload) => ({
  type: FETCH_STOCKS_SUCCESS,
  payload,
});

const fetchStocksFail = (error) => ({
  type: FETCH_STOCKS_FAIL,
  error,
});

const fetchState = () => ({
  type: FETCH_START,
});

export const stopLoader = () => ({
  type: 'STOP_LOADING',
});

export const getStocksFromAPI = () => async (dispatch) => {
  dispatch(fetchState());
  try {
    const response = await axios(BASE_URL);
    dispatch(stopLoader());
    dispatch(fetchStocks(response.data));
  } catch (error) {
    dispatch(fetchStocksFail(error));
  }
};

const stockPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: !state.loading };

    case FETCH_STOCKS_SUCCESS:
      return { ...state, data: [...action.payload] };

    case 'STOP_LOADING':
      return { ...state, loading: !state.loading };

    case FETCH_STOCKS_FAIL:
      return [];

    default:
      return state;
  }
};

export default stockPriceReducer;
