import React from 'react';
import CoorsLight from '../../images/beers/CoorsLight.jpg';

const CoolStuff = () => {
  const titleStyle = {
    borderBottom: "2px solid #fff",
    width: "50%",
    margin: "auto",
    padding: "10px"
  }
  return(
    <>
    <div className="cool-stuff pt-4">
      <h1 style={titleStyle}>Beer Of The Week</h1>
    <div className="row pt-5">
      <div className="col-md-6 offset-md-3">
          <div className="media">
          <img className="mr-3 rounded m-auto" src={CoorsLight} height="200px" width="200px" alt="Smalls"/>
        <div className="media-body pl-5">
          <h5 className="mt-0 font-weight-bold">Coors Light</h5>
          This Beer is the best beer around. It truly hits the ballz sack when you take a ship. I just want to ram everything
          from behind.
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CoolStuff;
