import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStocksFromAPI } from '../redux/stocks/stocks';
import { getTopGainersStocksFromAPI } from '../redux/stocks/trending';
import SearchForm from './Pages/SearchForm';
import TrendingStocks from './Pages/TrendingStocks';
import { SearchRender, StockRender } from './views/Display';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.stocks.data.length === 0 && state.gainers.data.length === 0) {
      dispatch(getStocksFromAPI());
      dispatch(getTopGainersStocksFromAPI());
    }
  }, []);

  const { stocks, gainers } = state;
  const { data: screeners, search, isSearching } = stocks;
  const { data: trending } = gainers;
  const handleNavigation = (symbol) => {
    navigate(`/details/${symbol}`);
  };
  return (
    <div className="app-container">
      <TrendingStocks trending={trending} navigate={handleNavigation} />
      <SearchForm />
      <div>
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
      </div>
    </div>
  );
};
export default Home;
