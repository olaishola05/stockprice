/* eslint-disable object-curly-newline */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiFillAudio } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <AiOutlineArrowLeft
          onClick={() => navigate('/')}
          size={25}
          style={{ float: 'left', marginTop: '0.3rem', cursor: 'pointer', color: 'white' }}
        />
        <h1>Company Profile</h1>
      </div>

      <div className="icons">
        <AiFillAudio size={20} />
        <IoMdSettings size={20} />
      </div>
    </div>
  );
};

export default Topbar;
