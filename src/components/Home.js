/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BallTriangle } from 'react-loader-spinner';
import screener from '../screener.jpg';
import { getStocksFromAPI } from '../redux/stocks/stocks';
import SearchForm from './Pages/SearchForm';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stocks);
  const { loading, data: stocks, search, isSearching } = state;

  useEffect(() => {
    if (state.data.length === 0) {
      dispatch(getStocksFromAPI());
    }
  }, []);

  const SearchRender = () => {
    return (
      <>
        {search.map((filterStock) => (
          <li key={filterStock.symbol} className="name">
            <Link to="/details" className="link">
              {' '}
              <BsArrowRightCircle />
            </Link>
            <div>
              <span>{filterStock.symbol}</span>
              <p>{filterStock.companyName}</p>
              <p>{`Market Cap: ${filterStock.marketCap}`}</p>
            </div>
          </li>
        ))}
      </>
    );
  };

  const StockRender = () => {
    return (
      <>
        {stocks.map((stock) => (
          <li key={stock.symbol} className="name">
            <Link to="/details" className="link">
              {' '}
              <BsArrowRightCircle />
            </Link>
            <div>
              <span>{stock.symbol}</span>
              <p>{stock.companyName}</p>
              <p>{`Market Cap: ${stock.marketCap}`}</p>
            </div>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="app-container">
      <img src={screener} alt="display background" />
      <SearchForm />
      <div>
        {loading ? (
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
            <ul className="stock-category">{isSearching ? <StockRender /> : <SearchRender />}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
