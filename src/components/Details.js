/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const Details = () => {
  return (
    <div>
      <h1>Hello details</h1>
      <p>szcbkjsbcscf.s</p>

      <Link to="/">
        <BsArrowLeftCircle />
      </Link>
    </div>
  );
};

export default Details;
