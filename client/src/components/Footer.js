import React from 'react';
import Logo from './images/booksandbrewskies/logo.png';

const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer__content">
                        <img src={Logo} alt="logo" height="25px" width="25px" />
                        <p className="">Created By The Men, For The Boys.</p>
                  </div>
                  <p className="footer__copyright">
                        &copy; Copyright 2020 All Rights Reserved
                  </p>
            </footer>
      )
}

export default Footer;
