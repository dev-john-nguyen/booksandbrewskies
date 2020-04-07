import React from 'react';
import Logo from './images/booksandbrewskies/logo.png';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import FloatCart from './shop/components/floatcart';

const Header = ({ location }) => {

  const handleStoreRender = () => {
    return (
      <>
        <Link
          activeClass='active'
          to="platforms"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          href=''
          className="py-2 d-none d-md-inline-block mt-2"
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
          className="py-2 d-none d-md-inline-block mt-2"
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
          className="py-2 d-none d-md-inline-block mt-2"
        >
          Team
</Link>
      </>
    )
  }

  return (
    <nav className="site-header sticky-top py-1" style={{ backgroundColor: "#130f0a", opacity: "0.9" }}>
      <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "1000px" }}>
        <LinkRouter to='/' className="py-2" aria-label="Home"><img src={Logo} alt="logo" height="50px" width="50px" /></LinkRouter>
        {location.pathname === "/store" && <LinkRouter to='/' className="py-2 d-none d-md-inline-block mt-2">Home</LinkRouter>}
        <LinkRouter to='/store' className="py-2 d-md-inline-block mt-2">Store</LinkRouter>
        {location.pathname !== "/store" && handleStoreRender()}
        <LinkRouter to='/contact' className="py-2 d-md-inline-block mt-2">Contact Us</LinkRouter>
        <div className='py-2 d-inline-block' />
        {location.pathname !== "/store/checkout" && <FloatCart />}
      </div>
    </nav>
  )
}

export default Header;
