import React from 'react';
import Logo from './images/booksandbrewskies/logo.png';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const Header = () => {

  return (
    <nav className="site-header sticky-top py-1" style={{ backgroundColor: "#130f0a", opacity: "0.9" }}>
      <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "1000px" }}>
        <LinkRouter to='/' className="py-2" aria-label="Product"><img src={Logo} alt="logo" height="50px" width="50px" /></LinkRouter>
        <Link
          activeClass='active'
          to="store"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=''
          className="py-2 d-md-inline-block mt-2"
        >
          Store
</Link>
        <Link
          activeClass='active'
          to="platforms"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=''
          className="py-2 d-md-inline-block mt-2"
        >
          Podcast
</Link>
        <Link
          activeClass='active'
          to="special-events"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=''
          className="py-2 d-md-inline-block mt-2"
        >
          Special Events
</Link>
        <Link
          activeClass='active'
          to="team"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=''
          className="py-2 d-md-inline-block mt-2"
        >
          Team
</Link>
        <LinkRouter to='/contact' className="py-2 d-md-inline-block mt-2">Contact Us</LinkRouter>
      </div>
    </nav>
  )
}

export default Header;
