import React from 'react';
import { useState } from 'react';
import './Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Nav() {
  /* scroll */
  const [navBlack, SetNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const transitionNav = () => {
    window.scrollY > 100 ? SetNavBlack(true) : SetNavBlack(false);
  };

  useState(() => {
    document.addEventListener('scroll', transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  /* scroll */

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? 'nav--black' : 'nav--transparent'
      } ${toggleMenu && 'show'}`}
    >
      <button className='nav__burger' onClick={handleClick}>
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

export default Nav;
