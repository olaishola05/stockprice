/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { BsArrowRightCircle } from 'react-icons/bs';
import { BallTriangle } from 'react-loader-spinner';
import screener from '../screener.jpg';
import {
  getStocksFromAPI,
  brazil,
  britain,
  taiwan,
  china,
  AU,
  NL,
  canada,
  ireland,
  switz,
  france,
  america,
} from '../redux/stocks/stocks';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stocks);
  const { data: stocks, loading } = state;

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(getStocksFromAPI());
    }
  }, []);

  return (
    <div className="app-container">
      <h1>Stock Screener</h1>
      <img src={screener} alt="display background" />
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
          <ul className="test">
            <li>{america.length}</li>
            <li>{brazil.length}</li>
            <li>{AU.length}</li>
            <li>{NL.length}</li>
            <li>{britain.length}</li>
            <li>{taiwan.length}</li>
            <li>{china.length}</li>
            <li>{canada.length}</li>
            <li>{ireland.length}</li>
            <li>{france.length}</li>
            <li>{switz.length}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
