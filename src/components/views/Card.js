/* eslint-disable prefer-destructuring */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { Puff } from 'react-loader-spinner';

const Card = () => {
  const state = useSelector((state) => state.profile);
  const stock = state.data[0];
  console.log('hi', stock);
  return (
    <div>
      <p>Hello world</p>
    </div>
    // <>
    //   {!state.fetching ? (
    //     (<Puff />)()
    //   ) : (
    //     <div>
    //       <p>{stock.symbol}</p>
    //       <p>{stock.companyName}</p>
    //       <img src={stock.image} alt={stock.image} />
    //     </div>
    //   )}
    // </>
  );
};

// Card.propTypes = {
//   state: PropTypes.arrayOf(
//     PropTypes.shape({
//       symbol: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//       companyName: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
// };
export default Card;
