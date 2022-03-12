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

  console.log(id);

  useEffect(() => {
    dispatch(fetchSymbolDetails(id));
  }, [id]);

  console.log(state.length);
  if (state.data.length > 0) {
    console.log('hi', state.data[0]);
    const { symbol, companyName, image } = state.data[0];
    return (
      <>
        <div>
          <p>{symbol}</p>
          <p>{companyName}</p>
          <img src={image} alt={image} />
        </div>
      </>
    );
  }
  return <Puff />;
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
