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
                  <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "960px" }}>
                        <div className="icon-content p-1">
                        <Link to="/" className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></Link>
                        <p className="mt-2 serif">Created by the men, for the boys.</p>
                        </div>
                        <div className="footer-tab-info d-grid p-1">
                              <p className="mb-1">Pages To Visit</p>
                                    <Link to='/store' className="serif">Store</Link>
                                    <Link to="/bb" className="serif" >Books and Beers Reviews</Link>
                                    <Link to='/contact' className="serif">Contact Us</Link>
                        </div>
                        <div className="basic-information p-1">
                              <p className="mb-1">Alittle Information About Us</p>
                              <p className="serif">We are personal trainers living in Denver, Colorado. We specialize in sports performance training.
                              Contact us with any inquiries. </p>
                        </div>
                        <div className="social-icons mt-2 p-1">
                              <h4>Follow Us</h4>
                              <a href="https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6" target="_blank" rel="noopener noreferrer">
                                    <img className="rounded mr-2 mt-2" height="25px" width="25px" src={Spotify} alt="Spotify" />
                              </a>
                              <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
                                    <img className="rounded mr-2 mt-2" height="25px" width="25px" src={Apple} alt="Apple" />
                              </a>
                              <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
                                    <img className="rounded mr-2 mt-2" height="25px" width="25px" src={Youtube} alt="Youtube" />
                              </a>
                              <a href="https://anchor.fm/books--brewskies" target="_blank" rel="noopener noreferrer">
                                    <img className="rounded mr-2 mt-2" height="25px" width="25px" src={Anchor} alt="Anchor" />
                              </a>
                        </div>
                  </div>
            </footer>
      )
}

export default Footer;
