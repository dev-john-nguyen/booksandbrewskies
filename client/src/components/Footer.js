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
                        <Link to="/" className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></Link>
                        <div className="social-icons mt-2">
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
