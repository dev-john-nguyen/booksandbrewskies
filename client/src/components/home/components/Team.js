import React from 'react';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/insta.png';
import Twitter from '../../images/twitter.png';
import Linkedin from '../../images/linkedin.png';


const Team = ({ scrollHeight }) => {

  const teamImageContentStyle = {
    color: "#fff",
    // position: "relative",
    // bottom: "460px",
    // textAlign: 'left',
    // marginLeft: '1rem'
    position: 'absolute',
    marginLeft: '1rem',
    top: '50px'
  }

  const socialButtonsStyle = {
    width: '100%'
  }

  const socialContent = {
    position: 'relative',
    top: '40%',
    margin: 'auto',
    textAlign: 'center'
  }


  return (
    <>
      <div className="text-center pt-6" id="team" style={{ backgroundColor: "#fff", color: "rgb(51, 34, 18)" }}>
        <div className='row m-auto pt-5'>
          <div className="col-6 team-col">
            <div className="team-header-content">
          <h1 style={{ fontSize: '3rem' }}>Meet The Host</h1>
          <p>
          We Are Sports Performance Trainers Who Are Former D1 Football Players. 
          We Wanted To Share Our Wisdom By Creating A Locker Room Like Atmosphere And That's When Books And Brewskies Was Created.
          </p>
          </div>
          </div>
          <div className='col' style={{maxHeight: '810px'}}>
            <div className="team-section-content">
            <div className="team-member team-shane shadow rounded">
              <div className="team-image-content" style={teamImageContentStyle}>
                <h4 className="team-name" style={{ fontSize: '2rem' }}>Shane Moody</h4>
              </div>
              <div className="social-buttons">
                <div style={socialContent}>
                  <h2>Shane Moody</h2>
                  <p>Denver, Colorado native. Griz alumni.</p>
                  <ul className="list-inline m-auto" style={socialButtonsStyle}>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/shane-moody-4927b5199/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"><img className="team-icons" src={Linkedin} alt="social-icon" /></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/shanemoody25/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram-in"><img className="team-icons" src={Instagram} alt="social-icon" /></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="team-member team-christian shadow rounded" >
                <div className="team-image-content" style={teamImageContentStyle}>
                  <h4 className="team-name" style={{ fontSize: '2rem' }}>Christian Backes</h4>
                </div>
                <div className="social-buttons">
                  <div style={socialContent}>
                    <h2>Christian Backes</h2>
                    <p>Denver, Colorado native. UNC Alumni</p>
                    <ul className="list-inline m-auto" style={socialButtonsStyle}>
                      <li className="list-inline-item">
                        <a href="https://twitter.com/backes07">
                          <i className="fab fa-twitter"><img className="team-icons" src={Twitter} alt="social-icon" /></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com/backes07/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"><img className="team-icons" src={Facebook} alt="social-icon" /></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.instagram.com/christianbackes/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram-in"><img className="team-icons" src={Instagram} alt="social-icon" /></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;
