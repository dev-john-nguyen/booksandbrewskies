import React from 'react';
import Team from './components/Team';
import CoolStuff from './components/CoolStuff';
import Platforms from './components/Platforms';
import Store from './components/Store';

var Scroll = require('react-scroll');
var Element = Scroll.Element;

class Home extends React.Component {

  render() {

    return (
      <>
        <div className="row align-items-center vh-100 text-center">
          <div className="col align-self-center">
            <h1 className="display-4 font-weight-normal header-text header-title animated fadeIn">Books & Brewskies</h1>
            <p className="lead">Created by the men, for the boys.</p>
            <iframe title="podcast-1" className="mb-4 w-auto" src="https://anchor.fm/books--brewskies/embed/episodes/Episode-9-Markus-Miller-Quarantine-Life-ebpu9t/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
            <div>
              <svg className="bi bi-chevron-down animated infinite bounce slower" width="6em" height="6em" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.646 6.646a.5.5 0 01.708 0L10 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
        <div style={{maxWidth: '2000px', margin: 'auto', boxShadow: '0 1px 1rem 1px #eee'}}>
        <Store />
        <Platforms />
        <CoolStuff />
        <Element name="Team">
        <Team />
        </Element>
        </div>
      </>
    )
  }
}

export default Home;
