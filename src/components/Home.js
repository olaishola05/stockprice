/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BallTriangle } from 'react-loader-spinner';
import { getStocksFromAPI } from '../redux/stocks/stocks';
import SearchForm from './Pages/SearchForm';
import TrendingStocks from './Pages/TrendingStocks';
import { getTopGainersStocksFromAPI } from '../redux/stocks/trending';
import { fetchSymbolDetails } from '../redux/stocks/details';
import { SearchRender, StockRender } from './views/Display';

const Home = ({ param }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { stocks, gainers, profile } = state;
  const { loading, data: screeners, search, isSearching } = stocks;
  const { isLoading, data: trending } = gainers;

  console.log(profile);
  console.log(param);

  useEffect(() => {
    if (state.stocks.data.length === 0 && state.gainers.data.length === 0) {
      dispatch(getStocksFromAPI());
      dispatch(getTopGainersStocksFromAPI());
      dispatch(fetchSymbolDetails());
    }
  }, [param]);

  return (
    <div className="app-container">
      {!isLoading && <TrendingStocks trending={trending} />}
      <SearchForm />
      <div>
        {!loading ? (
          <div
            style={{
              width: '100%',
              height: '100',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10rem auto',
            }}
          >
            {' '}
            <BallTriangle color="#2BAD60" height="80" width="80" />
          </div>
        ) : (
          <div className="main">
            <h5>All Stocks</h5>
            <ul className="stock-category">
              {isSearching ? (
                <StockRender screeners={screeners} />
              ) : (
                <SearchRender search={search} />
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  param: PropTypes.string.isRequired,
};
export default Home;
