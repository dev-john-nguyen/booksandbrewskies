import React from 'react';
import Logo from './images/booksandbrewskies/logo.png';
import { Link } from 'react-router-dom';
import FloatCart from './shop/components/floatcart';
import { useEffect, useState } from 'react';
import Youtube from './icons/youtube.png';
import ApplePod from './icons/apple.svg';

const Navbar = ({ pathname }) => {
  const [positionY, setPositionY] = useState(0)
  const [showNav, setShowNav] = useState(false);

  const listenToScroll = () => {
    setPositionY(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);

    return () => {
      window.removeEventListener('scroll', listenToScroll);
    }
  }, [])

  const renderBackground = () => {
    if (positionY > 10) {
      return 'navbar__background';
    } else {
      return ''
    }
  }

  return (
    <nav className={`navbar ${showNav ? 'navbar__mobile-show' : 'navbar__mobile'} ${renderBackground()}`} >
      <div className='navbar__nav nav'>
        <i className={`navbar__view ${showNav ? 'navbar__view__active' : ''}`} onClick={() => setShowNav(showNav ? false : true)}></i>
        <Link to='/' className="navbar__nav__logo" aria-label="Home"><img src={Logo} alt="logo" height='100%' width='100%' /></Link>
        <ul className="navbar__nav__menu">
          <Link className="navbar__nav__menu__link" to="/" onClick={() => setShowNav(showNav ? false : true)}>
            <li className="navbar__nav__menu__list">
              Home
          </li>
          </Link>
          <Link className="navbar__nav__menu__link" to="/store" onClick={() => setShowNav(showNav ? false : true)}>
            <li className="navbar__nav__menu__list">
              Store
          </li>
          </Link>
          <Link className="navbar__nav__menu__link" to="/bb" onClick={() => setShowNav(showNav ? false : true)}>
            <li className="navbar__nav__menu__list">
              Reviews
          </li>
          </Link>
          <Link className="navbar__nav__menu__link" to="/men" onClick={() => setShowNav(showNav ? false : true)}>
            <li className="navbar__nav__menu__list">
              Admin
          </li>
          </Link>
        </ul>
      </div>

      <div className="navbar__social-media">
        <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} className="navbar__social-media-youtube" alt="youtube" />
        </a>
        <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
          <img src={ApplePod} className="navbar__social-media-apple-podcast" alt="apple" />
        </a>
        <FloatCart />
      </div>
    </nav>
  )
}

export default Navbar;
