import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { getStocksFromAPI } from '../redux/stocks/stocks';

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
    <div>
      <h1>Hello</h1>
      <p>lorem</p>
      {loading ? (
        <div
          style={{
            width: '100%',
            height: '100',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {' '}
          <BallTriangle color="#2BAD60" height="80" width="80" timeout={300} />
        </div>
      ) : (
        <ul className="test">
          {stocks.map((item) => (
            <li key={item.symbol}>
              <Link to="details">{item.symbol}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
