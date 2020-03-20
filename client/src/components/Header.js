import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/booksandbrewskies/logo.png';
const Header = () => {

  return (
    <nav className="site-header sticky-top py-1" style={{backgroundColor: "rgba(0, 0, 0, .85)"}}>
  <div className="container d-flex flex-md-row justify-content-between" style={{maxWidth: "960px"}}>
    <Link to="/" className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></Link>
    <div className="button">
    <Link to="/contact" className="btn btn-primary py-2 d-md-inline-block mt-2">Contact Us</Link>
    </div>
  </div>
</nav>
  )
}

export default Header;
