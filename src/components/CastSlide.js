import React from 'react';
import { IMG_PATH } from '../api/config';
import '../styles/CastSlide.css';

const CastSlide = ({ cast }) => {
  return (
    <div className='cast-card'>
      <img src={`${IMG_PATH + cast.profile_path}`} alt={cast.name} />

      <div className='cast-info'>
        <h3>{cast.name}</h3>
        <p>{cast.character}</p>
      </div>
    </div>
  );
};

export default CastSlide;
