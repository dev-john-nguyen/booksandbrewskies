import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/booksandbrewskies/logo.png';
import Youtube from './images/platforms/youtube.png';
import Spotify from './images/platforms/spotify.png';
import Anchor from './images/platforms/anchor.png';
import Apple from './images/platforms/apple.png';

const Footer = () => {
      return (
            <footer className="footer mt-auto py-1" style={{ backgroundColor: "#130f0a", opacity: "0.9" }}>
                  <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "960px", flexWrap: 'wrap' }}>
                        <div className="footer-content icon-content p-1">
                        <Link to="/" className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></Link>
                        <p className="mt-2 serif">Created By The Men, For The Boys.</p>
                        </div>
                        <div className="footer-content footer-tab-info p-1">
                              <p className="mb-1">Pages To Visit</p>
                                    <Link to='/store' className="serif">Store</Link>
                                    <Link to="/bb" className="serif" >Books and Beers Reviews</Link>
                                    <Link to='/contact' className="serif">Contact Us</Link>
                        </div>
                        <div className="footer-content basic-information p-1">
                              <p className="mb-1">About Us</p>
                              <p className="serif text-capitalize">We Are Sports Performance Trainers Who Are Former D1 Football Players. We wanted
                              to share our wisdom by creating a locker room like atmosphere and that's when Books and Brewskies was created.
                              </p>
                        </div>
                        <div className="footer-content footer-tab-info mt-2 p-1">
                        <p className="mb-1">Listen On</p>
                              <a className="serif" href="https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6" target="_blank" rel="noopener noreferrer">
                                    Spotify
                              </a>
                              <a className="serif" href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
                                    Apple Podcast
                              </a>
                                    <a className="serif" href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
                                    Youtube
                              </a>
                                    <a className="serif" href="https://anchor.fm/books--brewskies" target="_blank" rel="noopener noreferrer">
                                    Anchor Podcast
                              </a>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer;
