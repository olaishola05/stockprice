import symbolDetailReducer from '../redux/stocks/details';

test('if load data to state', () => {
  const previousState = {
    data: [],
    fetching: false,
    error: '',
  };

  const mock = [
    {
      companyName: 'Apple Inc.',
      country: 'US',
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Consumer Electronics',
      isActivelyTrading: true,
      isEtf: false,
      lastAnnualDividend: 0.88,
      marketCap: 2525100769280,
      price: 154.73,
      sector: 'Technology',
      symbol: 'AAPL',
      volume: 97563235,
    },
  ];
  expect(
    symbolDetailReducer(previousState, {
      type: 'stock-price/stocks/FETCH_START',
      payload: mock,
    }),
  ).toEqual([
    {
      companyName: 'Apple Inc.',
      country: 'US',
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      industry: 'Consumer Electronics',
      isActivelyTrading: true,
      isEtf: false,
      lastAnnualDividend: 0.88,
      marketCap: 2525100769280,
      price: 154.73,
      sector: 'Technology',
      symbol: 'AAPL',
      volume: 97563235,
    },
  ]);
});
