import React from 'react';
import './Nav.scss';

function nav() {
  return (
    <div className='Nav'>
      <button className='nav_burger'></button>
      <img src='./images/logo.png' alt='logo' className='nav_logo' />
    </div>
  );
}

export default nav;
