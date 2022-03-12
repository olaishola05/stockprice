/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { getStocksFromAPI } from '../redux/stocks/stocks';
import SearchForm from './Pages/SearchForm';
import TrendingStocks from './Pages/TrendingStocks';
import { getTopGainersStocksFromAPI } from '../redux/stocks/trending';
import { fetchSymbolDetails } from '../redux/stocks/details';
import { SearchRender, StockRender } from './views/Display';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { stocks, gainers } = state;
  const { loading, data: screeners, search, isSearching } = stocks;
  const { isLoading, data: trending } = gainers;

  useEffect(() => {
    if (state.stocks.data.length === 0 && state.gainers.data.length === 0) {
      dispatch(getStocksFromAPI());
      dispatch(getTopGainersStocksFromAPI());
    }
  }, []);

  const handleNavigation = (symbol) => {
    navigate(`/details/${symbol}`);
    dispatch(fetchSymbolDetails(symbol));
  };

  return (
    <div className="app-container">
      {isLoading && <TrendingStocks trending={trending} navigate={handleNavigation} />}
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
              {!isSearching ? (
                <StockRender screeners={screeners} navigate={handleNavigation} />
              ) : (
                <SearchRender search={search} navigate={handleNavigation} />
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
