import React from 'react';
import Youtube from '../../images/platforms/Youtube.jpg';
import Spotify from '../../images/platforms/Spotify.jpg';
import Apple from '../../images/platforms/Apple.png';
import Anchor from '../../images/platforms/anchor.png';

const Platforms = () => {
  const titleStyle = {
    borderBottom: "2px solid #fff",
    maxWidth: "500px",
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
                  <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mt-4">Listen</a>
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
              <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mt-4">Listen</a>
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
              <a href="https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mt-4">Listen</a>
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
              <a href="https://anchor.fm/books--brewskies" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mt-4">Listen</a>
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
