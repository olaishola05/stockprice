/* eslint-disable indent */
import React from 'react';
import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';

const TrendingStocks = () => {
  const state = useSelector((state) => state.stocks);
  const { loading, trending } = state;
  console.log(trending);

  return (
    <div>
      <h1>Top trending stocks</h1>

      {loading ? (
        <Puff color="#2BAD60" height="80" width="80" />
      ) : (
        <div>
          <div>
            <p>{trending[0].symbol}</p>
            <p>{`$${trending[0].price}`}</p>
            <p>{trending[0].companyName}</p>
            <p>{`Volume: ${trending[0].volume}`}</p>
            <p>{`Industry: ${trending[0].industry}`}</p>
            <p>{`Market Cap: ${trending[0].marketCap}`}</p>
          </div>

          <div>
            <p>{trending[0].symbol}</p>
            <p>{`$${trending[0].price}`}</p>
            <p>{trending[0].companyName}</p>
            <p>{`Volume: ${trending[0].volume}`}</p>
            <p>{`Industry: ${trending[0].industry}`}</p>
            <p>{`Market Cap: ${trending[0].marketCap}`}</p>
          </div>

          <div>
            <p>{trending[0].symbol}</p>
            <p>{`$${trending[0].price}`}</p>
            <p>{trending[0].companyName}</p>
            <p>{`Volume: ${trending[0].volume}`}</p>
            <p>{`Industry: ${trending[0].industry}`}</p>
            <p>{`Market Cap: ${trending[0].marketCap}`}</p>
          </div>

          <div>
            <p>{trending[0].symbol}</p>
            <p>{`$${trending[0].price}`}</p>
            <p>{trending[0].companyName}</p>
            <p>{`Volume: ${trending[0].volume}`}</p>
            <p>{`Industry: ${trending[0].industry}`}</p>
            <p>{`Market Cap: ${trending[0].marketCap}`}</p>
          </div>

          <div>
            <p>{trending[0].symbol}</p>
            <p>{`$${trending[0].price}`}</p>
            <p>{trending[0].companyName}</p>
            <p>{`Volume: ${trending[0].volume}`}</p>
            <p>{`Industry: ${trending[0].industry}`}</p>
            <p>{`Market Cap: ${trending[0].marketCap}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingStocks;
