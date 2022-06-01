import React from 'react';
import './Nav.scss';

function nav() {
  return (
    <div className='nav show nav--black'>
      <button className='nav__burger'>
        <img src='./images/menu.png' alt='logo' className='menu' />
      </button>
      <img src='./images/logo.png' alt='logo' className='nav__logo' />
      <nav className='nav__links'>
        <a href='/' className='nav__link'>
          Home
        </a>
        <a href='/' className='nav__link'>
          Movies
        </a>
        <a href='/' className='nav__link'>
          Tv-Shows
        </a>
      </nav>
      <div className='nav__actions'>
        <a href='/' className='nav__action'>
          Search
        </a>
        <a href='/' className='nav__action'>
          Direct
        </a>
        <a href='/' className='nav__action'>
          Gift
        </a>
        <a href='/' className='nav__action'>
          Notification
        </a>
        <img
          src='./images/pngtree-avatar.jpg'
          alt='avatar'
          className='avatar'
        />
      </div>
    </div>
  );
}

export default nav;
