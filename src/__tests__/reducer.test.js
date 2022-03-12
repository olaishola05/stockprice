import stockPriceReducer, { fetchStocks } from '../redux/stocks/stocks';

const initialState = [];
describe('test redux', () => {
  it('if is empty array', () => {
    expect(stockPriceReducer(initialState, [])).toEqual([]);
  });
  it('if it is 3 stocks in array', () => {
    expect(stockPriceReducer(initialState, fetchStocks(['AAPL', 'GOOG', 'TSLA']))).toEqual({
      data: ['AAPL', 'GOOG', 'TSLA'],
      loading: true,
    });
  });
  it('if return single istock', () => {
    expect(stockPriceReducer(initialState, fetchStocks(['FB']))).toEqual({
      data: ['FB'],
      loading: true,
    });
  });
});
