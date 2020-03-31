import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/booksandbrewskies/logo.png';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-1" style={{backgroundColor: "#130f0a", opacity: "0.9"}}>
      <div className="container d-flex flex-md-row justify-content-between" style={{maxWidth: "960px"}}>
      <Link to="/" className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></Link>
      <div className="social-icons mt-2">
<a href="https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6" target="_blank" rel="noopener noreferrer">
      <img className="rounded mr-2 mt-2" height="25px" width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/600px-Spotify.png" alt="..." />
</a>
<a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
      <img className="rounded mr-2 mt-2" height="25px" width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/256px-Podcasts_%28iOS%29.svg.png" alt="..." />
</a>
      <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
        <img className="rounded mr-2 mt-2" height="25px" width="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/YouTube_social_red_squircle_%282017%29.svg/1024px-YouTube_social_red_squircle_%282017%29.svg.png" alt="..." />
        </a>
              <a href="https://anchor.fm/books--brewskies" target="_blank" rel="noopener noreferrer">
      <img className="rounded mr-2 mt-2" height="25px" width="25px" src="https://pbs.twimg.com/profile_images/966666153929125888/pwVzLi75_400x400.jpg" alt="..." />
</a>
      </div>
      </div>
      </footer>
  )
}

export default Footer;
