import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/booksandbrewskies/logo.png';

const Footer = () => {
      return (
            <footer className="footer mt-auto py-1" style={{
                  backgroundColor: "#130f0a", opacity: "0.9",
                  display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                  <div className="p-1 mt-4 mb-2 text-center" style={{ width: "310px" }}>
                        <Link to="/" className="py-2" aria-label="Product">
                        <p className="d-flex justify-content-between align-items-center serif">
                              <img src={Logo} alt="logo" height="25px" width="25px" />
                        Created By The Men, For The Boys.</p>
                        </Link>
                  </div>
            </footer>
      )
}

export default Footer;
