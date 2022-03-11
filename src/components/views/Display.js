import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchRender = ({ search }) => {
  const navigate = useNavigate();
  return (
    <>
      {search.map((filterStock) => (
        <li key={filterStock.symbol} className="name">
          <BsArrowRightCircle
            onClick={() => navigate(`/details/${filterStock.symbol}`)}
            className="link"
          />
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

export const StockRender = ({ screeners }) => {
  const navigate = useNavigate();
  return (
    <>
      {screeners.map((stock) => (
        <li key={stock.symbol} className="name">
          <BsArrowRightCircle
            onClick={() => navigate(`/details/${stock.symbol}`)}
            className="link"
          />
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
};
