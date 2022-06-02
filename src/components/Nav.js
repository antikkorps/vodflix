import React from 'react';
import './Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from '@mui/icons-material/Notifications';

function nav() {
  return (
    <div className='nav show nav--black'>
      <button className='nav__burger'>
        <MenuIcon />
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
          <SearchIcon />
        </a>
        <a href='/' className='nav__action'>
          Direct
        </a>
        <a href='/' className='nav__action'>
          <RedeemIcon />
        </a>
        <a href='/' className='nav__action'>
          <NotificationsIcon />
        </a>
        <img src='./images/avatar.png' alt='avatar' className='avatar' />
      </div>
    </div>
  );
}

export default nav;
