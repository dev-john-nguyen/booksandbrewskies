import React from 'react';
import CoorsLight from '../../images/beers/CoorsLight.jpg';
import Book from '../../images/beers/Image 5.svg';

const CoolStuff = () => {
  const titleStyle = {
    borderBottom: "2px solid #332212",
    maxWidth: "500px",
    margin: "auto",
    padding: "10px"
  }
  return (
    <div className="pt-6 pb-6 text-center special-events" style={{color: '#332212', backgroundColor: '#fff'}}>
      <h1 className="title" style={titleStyle}>Special Events</h1>
      <div className="row m-auto mt-6">
        <div className="col">
          <h2 className="botmw-text-design">Book Of The Month</h2>
          <img className="mt-3" src={Book} alt ="book" />
          <h3 className="mt-3">The Art of War</h3>
          <p className="mt-2">By: Sun Tzu</p>
        </div>
        <div className="col">
          <h2 className="botmw-text-design">Beer Of The Week</h2>
          <img className="mt-3" src={CoorsLight} alt="beer" />
          <h3 className="mt-3">Coors Light</h3>
          <p className="mt-2">From: Golden, Colorado</p>
        </div>
      </div>
    </div>
  )
}

export default CoolStuff;
