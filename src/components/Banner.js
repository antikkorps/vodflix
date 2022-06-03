import React from 'react';
import './Banner.scss';

function Banner() {
  return (
    <header className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>Titre</h1>
        <p className='banner__description'>
          lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
        <div className='banner__buttons'>
          <button className='banner__button'>Lecture</button>
          <button className='banner__button'>Plus d'infos</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
