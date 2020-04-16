import React from 'react';
import Together from '../../images/home/together.jpg';
import Facebook from '../../images/social/facebook.png';
import Instagram from '../../images/social/instagram.png';
import Twitter from '../../images/social/twitter.png';
import Linkedin from '../../images/social/linkedin.png';

const Attraction = ({scrollHeight}) => {

    return (
        <>
        <div className="pt-6 pb-6" id="store" style={{color: '#332212', backgroundColor: '#fff'}}>
            <div className="row m-auto justify-content-center align-items-center">
            <div className="col">
            <img src={Together} className="rounded img-fluid shadow" alt="together"/>
            </div>
            <div className="col">
                <h1 className="text-center" style={{ fontSize: '3rem' }}>Follow Us</h1>
                <ul className="list-inline social-buttons text-center mt-3">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"><img className="team-icons" src={Twitter} style={{ width: "calc(.08 * 100vw)", maxWidth: "50px"}} alt="social-icon" /></i>
                </a>
              </li>
              <li className="list-inline-item">
              <a href="https://www.facebook.com/booksandbrewskies/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"><img className="team-icons" src={Facebook} style={{ width: "calc(.08 * 100vw)", maxWidth: "50px"}} alt="social-icon" /></i>
                </a>
              </li>
              <li className="list-inline-item">
              <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"><img className="team-icons" src={Linkedin} style={{ width: "calc(.08 * 100vw)", maxWidth: "50px"}} alt="social-icon" /></i>
                </a>
              </li>
              <li className="list-inline-item">
              <a href="https://www.instagram.com/booksandbrewskies/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram-in"><img className="team-icons" src={Instagram} style={{ width: "calc(.08 * 100vw)", maxWidth: "50px"}} alt="social-icon" /></i>
                </a>
              </li>
            </ul>
                <div id="chevron" style={{ width: '100%', top: '40px', minWidth: '200px' }}/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Attraction;