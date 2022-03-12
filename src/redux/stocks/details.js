import axios from 'axios';

const FETCH_SYMBOL_SUCCESS = 'stock-price/stocks/FETCH_SYMBOL_SUCCESS';
const FETCH_SYMBOL_SUCCESS_FAIL = 'stock-price/stocks/FETCH_SYMBOL_FAIL';
const API_KEY = '3c4ce1f94bdb6914b93cb87ce827213b';
const FETCH_START = 'stock-price/stocks/FETCH_START';

const profileState = {
  data: [],
  fetching: false,
  error: '',
};

const fetchSymbolSuccess = (payload) => ({
  type: FETCH_SYMBOL_SUCCESS,
  payload,
});

const fetchSymbolfail = (payload) => ({
  type: FETCH_SYMBOL_SUCCESS_FAIL,
  payload,
});

const fetchState = () => ({
  type: FETCH_START,
});

export const fetchSymbolDetails = (symbol) => async (dispatch) => {
  dispatch(fetchState());
  try {
    const response = await axios(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`);
    dispatch(fetchSymbolSuccess(response.data));
  } catch (error) {
    const errorMsg = error.toString();
    dispatch(fetchSymbolfail(errorMsg));
  }
};

const symbolDetailReducer = (state = profileState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state };

    case FETCH_SYMBOL_SUCCESS:
      return { ...state, data: [...action.payload] };

    case FETCH_SYMBOL_SUCCESS_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default symbolDetailReducer;
