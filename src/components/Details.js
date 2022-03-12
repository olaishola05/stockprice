import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Details = ({ param }) => {
  const navigate = useNavigate();
  const state = useSelector((state) => state.profile.data);
  console.log(state);
  console.log(param);
  return (
    <div>
      <h1>Hello details</h1>
      <p>szcbkjsbcscf.s</p>
      <BsArrowLeftCircle
        onClick={() => navigate('/')}
        size={25}
        style={{ float: 'left', marginTop: '0.3rem', cursor: 'pointer' }}
      />
    </div>
  );
};
Details.propTypes = {
  param: PropTypes.string.isRequired,
};
export default Details;
