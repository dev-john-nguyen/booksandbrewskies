import React from 'react';
import Logo from './images/booksandbrewskies/logo.png';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
// import FloatCart from './shop/components/floatcart';

const Header = ({ location }) => {

//   const handleStoreRender = () => {
//     return (
//       <>
//         {/* <Link
//           activeClass='active'
//           to="platforms"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration={500}
//           href=''
//           className="py-2 d-none d-md-inline-block mt-2"
//         >
//           Podcast
// </Link> */}
//         <Link
//           activeClass='active'
//           to="team"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration={500}
//           href=''
//           className="py-2 d-none d-md-inline-block mt-2"
//         >
//           Team
// </Link>
//         <Link
//           activeClass='active'
//           to="contact"
//           spy={true}
//           smooth={true}
//           offset={0}
//           duration={500}
//           href=''
//           className="py-2 d-none d-md-inline-block mt-2"
//         >
//           Contact
// </Link>
//       </>
//     )
//   }

  const backgroundImageUrl = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255,255,255,0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`

  return (
    //     <nav className="site-header sticky-top py-1" style={{ backgroundColor: "#130f0a", opacity: "0.9" }}>
    //       <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "1000px" }}>
    //         <LinkRouter to='/' className="py-2" aria-label="Home"><img src={Logo} alt="logo" height="50px" width="50px" /></LinkRouter>
    //         {location.pathname === "/store" && <LinkRouter to='/' className="py-2 d-none d-md-inline-block mt-2">Home</LinkRouter>}
    //         <a href='https://teespring.com/stores/books-brewskies' className="py-2 d-md-inline-block mt-2">Store</a>
    //         <LinkRouter
    //           to="/bb"
    //           className="py-2 d-md-inline-block mt-2"
    //         >
    //           Reviews
    // </LinkRouter>
    //         {location.pathname === "/" && handleStoreRender()}
    //         {/* <LinkRouter to='/contact' className="py-2 d-md-inline-block mt-2">Contact</LinkRouter> */}
    //         {/* <div className='py-2 d-inline-block' /> */}
    //         {/* {location.pathname !== "/store/checkout" && <FloatCart />} */}
    //       </div>
    //     </nav>

    // background-color: #eabf00;
    // border: 1px solid #eabf00;

    <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#130f0a", opacity: "0.9" }}>
      <LinkRouter to='/' className="py-2 mr-5" aria-label="Home"><img src={Logo} alt="logo" height="50px" width="50px" /></LinkRouter>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{
        backgroundColor: '#eabf00',
        border: '1px solid #eabf00'
      }}>
        <span className="navbar-toggler-icon" style={{ backgroundImage: backgroundImageUrl }}></span>
      </button>
      <div className="container d-flex flex-md-row justify-content-between" style={{ maxWidth: "1000px" }}>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto justify-content-between w-100 text-center">
            <li className="nav-item">
              <LinkRouter className="nav-link" to="/">Home</LinkRouter>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='https://teespring.com/stores/books-brewskies'>Store</a>
            </li>
            <li className="nav-item">
              <LinkRouter className="nav-link" to="/bb">Reviews</LinkRouter>
            </li>
            <li className="nav-item">
              {location.pathname !== "/" ? <LinkRouter className="nav-link" to="/">Team</LinkRouter> :
                <Link
                  activeClass='active'
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  href=''
                  className="nav-link"
                >
                  Team
</Link>}
            </li>
            <li className="nav-item">
              {location.pathname !== "/" ? <LinkRouter className="nav-link" to="/">Contact</LinkRouter> :
                <Link
                  activeClass='active'
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  href=''
                  className="nav-link"
                >
                  Contact
</Link>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
