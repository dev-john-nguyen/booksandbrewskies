import React from 'react';
import CoorsLight from '../../images/beers/CoorsLight.jpg';
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
      <div className="row mt-6">
        <div className="col">
          <h2>Book Of The Month</h2>
          <img src={CoorsLight} />
          <h3>Books & Brewskies Coasters</h3>
        </div>
        <div className="col">
          <h2>Beer Of The Week</h2>
          <img src={CoorsLight} />
          <h3>Books & Brewskies Coasters</h3>
        </div>
      </div>
    </div>
  )
}

export default CoolStuff;
