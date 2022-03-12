/* eslint-disable prefer-destructuring */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { Puff } from 'react-loader-spinner';

const Card = () => {
  const state = useSelector((state) => state.profile);
  const stock = state;
  console.log('hi', stock);
  return (
    <div>
      <p>Hello</p>
    </div>
    // <>
    //   {!state.fetching ? (
    //     (<Puff />)()
    //   ) : (
    //     <div>
    //       {/* <p>{state.data[0].symbol}</p>
    //       <p>{state.data[0].companyName}</p>
    //       <img src={state.data[0].image} alt={state.data[0].image} /> */}
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
