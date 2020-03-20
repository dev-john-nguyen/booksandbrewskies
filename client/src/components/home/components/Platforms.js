import React from 'react';
import Youtube from '../../images/platforms/Youtube.jpg';
import Spotify from '../../images/platforms/Spotify.jpg';
import Apple from '../../images/platforms/Apple.png';
import Anchor from '../../images/platforms/anchor.png';

const Platforms = () => {
  const titleStyle = {
    borderBottom: "2px solid #fff",
    width: "50%",
    margin: "auto",
    padding: "10px"
  }

  return (
    <>
    <div className="platforms pt-4">
      <h1 style={titleStyle}>Find Us On</h1>
    <div className="row text-dark" style={{marginTop: "3rem"}}>
        <div className="col">
          <div className="card mb-4 shadow">
          <img src={Youtube}  className="bd-placeholder-img card-img-top" width="100%" height="130px" alt="youtube"/>
            <div className="card-body">
              <h4 className="card-text">Youtube</h4>
              <div className="justify-content-between align-items-center">
                  <button type="button" className="btn btn-primary btn-block mt-4">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow">
          <img src={Apple}  className="bd-placeholder-img card-img-top" width="100%" height="130px" alt="apple"/>
            <div className="card-body">
              <h4 className="card-text">Apple</h4>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-primary btn-block mt-3">Listen</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"></div>

        <div className="col">
          <div className="card mb-4 shadow">
          <img src={Spotify}  className="bd-placeholder-img card-img-top" width="100%" height="130px" alt="spotify"/>
            <div className="card-body">
              <h4 className="card-text">Spotify</h4>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-primary btn-block mt-3">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 shadow">
          <img src={Anchor}  className="bd-placeholder-img card-img-top" width="100%" height="130px" alt="anchor"/>
            <div className="card-body">
              <h4 className="card-text">Anchor</h4>
              <div className="d-flex justify-content-between align-items-center">
                <button type="button" className="btn btn-primary btn-block mt-3">Listen</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </>
  )
}

export default Platforms;
