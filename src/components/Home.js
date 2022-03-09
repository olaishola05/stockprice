/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { BsArrowRightCircle } from 'react-icons/bs';
import { BallTriangle } from 'react-loader-spinner';
import screener from '../screener.jpg';
import { getStocksFromAPI } from '../redux/stocks/stocks';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stocks);
  const { loading } = state;

  const us = state.data.filter((item) => item.country === 'US');
  const br = state.data.filter((item) => item.country === 'BR');
  const gb = state.data.filter((item) => item.country === 'GB');
  const tw = state.data.filter((item) => item.country === 'TW');
  const cn = state.data.filter((item) => item.country === 'CN');
  const ca = state.data.filter((item) => item.country === 'CA');
  const au = state.data.filter((item) => item.country === 'AU');
  const nl = state.data.filter((item) => item.country === 'NL');
  const ie = state.data.filter((item) => item.country === 'IE');
  const fr = state.data.filter((item) => item.country === 'FR');
  const ch = state.data.filter((item) => item.country === 'CH');

  useEffect(() => {
    if (state.data.length === 0) {
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
          <div className="test">
            <div>
              <span>USA</span>
              <p>{us.length}</p>
            </div>

            <div>
              <span>Brazil</span>
              <p>{br.length}</p>
            </div>
            <div>
              <span>Great Britain</span>
              <p>{gb.length}</p>
            </div>

            <div>
              <span>Taiwan</span>
              <p>{tw.length}</p>
            </div>

            <div>
              <span>France</span>
              <p>{fr.length}</p>
            </div>

            <div>
              <span>China</span>
              <p>{ch.length}</p>
            </div>

            <div>
              <span>Ireland</span>
              <p>{ie.length}</p>
            </div>
            <div>
              <span>China</span>
              <p>{cn.length}</p>
            </div>
            <div>
              <span>Canada</span>
              <p>{ca.length}</p>
            </div>

            <div>
              <span>Australia</span>
              <p>{au.length}</p>
            </div>

            <div>
              <span>New Zealand</span>
              <p>{nl.length}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
