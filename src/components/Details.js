import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const Details = () => {
  const navigate = useNavigate();
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

export default Details;
