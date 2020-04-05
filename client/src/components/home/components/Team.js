import React from 'react';
import Christian from '../../images/team/Christian.png';
import Shane from '../../images/team/Shane.png';
import John from '../../images/team/John-Nguyen.png';

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

        <h1 className="mb-6 title" style={titleStyle}>Meet Your Host</h1>

        <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle mb-2" src={Shane} alt="" style={{width: '200px'}}/>
            <h4>Shane Moody</h4>
            <p>Host</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle mb-2" src={Christian} alt="" style={{width: '200px'}}/>
            <h4>Christian Backes</h4>
            <p>Host</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle mb-2" src={John} alt="" style={{width: '200px'}}/>
            <h4>John Nguyen</h4>
            <p>Lead Developer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </div>
    </>
  )
}

export default Team;
