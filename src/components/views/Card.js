/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { fetchSymbolDetails } from '../../redux/stocks/details';

const Card = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchSymbolDetails(id));
  }, [id]);

  if (state.data.length > 0) {
    const { symbol, companyName, image, country, exchange, price, industry, volAvg, ceo, website } =
      state.data[0];
    return (
      <div className="company-info">
        <div className="details">
          <p>{symbol}</p>
          <p>{`Company: ${companyName}`}</p>
          <p>{`Country: ${country}`}</p>
          <p>{`Exchange: ${exchange}`}</p>
          <p>{`Price: $${price}`}</p>
          <p>{`Industry: ${industry}`}</p>
          <p>{`Vol. Average ${volAvg}`}</p>
        </div>
        <div className="exec">
          <img src={image} alt={image} />
          <div>
            <p>{`${ceo} CEO`}</p>
            <p>{`Company Website: ${website}`}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
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
      <Puff color="#2BAD60" height="80" width="80" />
    </div>
  );
};

export default Card;
