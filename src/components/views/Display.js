/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchRender = ({ search, navigate }) => {
  return (
    <>
      {search.map((filterStock) => (
        <li key={filterStock.symbol} className="name" onClick={() => navigate(filterStock.symbol)}>
          <BsArrowRightCircle className="link" />
          <div>
            <span>{filterStock.symbol}</span>
            <p>{filterStock.companyName}</p>
            <p>{`Market Cap: ${filterStock.marketCap}`}</p>
            <span>{`Vol. ${filterStock.volume}`}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export const StockRender = ({ screeners, navigate }) => {
  return (
    <>
      {screeners.map((stock) => (
        <li key={stock.symbol} className="name" onClick={() => navigate(stock.symbol)}>
          <BsArrowRightCircle className="link" />
          <div>
            <span>{stock.symbol}</span>
            <p>{stock.companyName}</p>
            <p>{`M.Cap: ${stock.marketCap}`}</p>
            <span>{`Vol. ${stock.volume}`}</span>
          </div>
        </li>
      ))}
    </>
  );
};

SearchRender.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      companyName: PropTypes.string.isRequired,
      marketCap: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  navigate: PropTypes.func.isRequired,
};

StockRender.propTypes = {
  screeners: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      companyName: PropTypes.string.isRequired,
      marketCap: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  navigate: PropTypes.func.isRequired,
};
