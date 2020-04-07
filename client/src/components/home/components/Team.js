import React from 'react';
import Christian from '../../images/team/Christian.png';
import Shane from '../../images/team/Shane.png';
import John from '../../images/team/John-Nguyen.png';

import Facebook from '../../images/facebook.png';
import Instagram from '../../images/insta.png';
import Twitter from '../../images/twitter.png';
import Linkedin from '../../images/linkedin.png';


const Team = () => {
  const titleStyle = {
    borderBottom: "2px solid #fff",
    maxWidth: "500px",
    margin: "auto",
    padding: "10px"
  }


  return (
    <>
      <div className="text-center pt-6 pb-6" id="team">

        <h1 className="mb-6 title" style={titleStyle}>Meet The Host</h1>

        <div className="row m-auto">
        <div className="col">
          <div className="team-member">
            <img className="mx-auto rounded-circle mb-2" src={Shane} alt="" style={{width: '200px'}}/>
            <h4>Shane Moody</h4>
            <p>Host</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"><img className="team-icons" src={Twitter} /></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"><img className="team-icons" src={Facebook} /></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"><img className="team-icons" src={Linkedin} /></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram-in"><img className="team-icons" src={Instagram} /></i>
                </a>
              </li>
            </ul>
          </div>
          <div id="chevron" />
        </div>
        <div className="col">
          <div className="team-member">
            <img className="mx-auto rounded-circle mb-2" src={Christian} alt="" style={{width: '200px'}}/>
            <h4>Christian Backes</h4>
            <p>Host</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"><img className="team-icons" src={Twitter} /></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"><img className="team-icons" src={Facebook} /></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"><img className="team-icons" src={Linkedin} /></i>
                </a>
              </li>
              <a href="#">
                  <i className="fab fa-instagram-in"><img className="team-icons" src={Instagram} /></i>
                </a>
            </ul>
            <div id="chevron" />
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Team;
