import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStocksFromAPI } from '../redux/stocks/stocks';

const Home = () => {
  const state = useSelector((state) => state.stocks);

  const data = [
    { id: 1, name: 'APPL' },
    { id: 4, name: 'Google' },
    { id: 3, name: 'Meta' },
  ];

  useEffect(() => {
    getStocksFromAPI();
  }, []);

  console.log(state);
  return (
    <div>
      <h1>Hello</h1>
      <p>lorem</p>
      <ul className="test">
        {data.map((item) => (
          <li key={item.id}>
            <Link to="details">{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
