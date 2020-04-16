import React from 'react';
import Beer from '../../images/beers/Beer.jpg';
import Book from '../../images/beers/Book.jpg';

const CoolStuff = ({ scrollHeight }) => {
  let imgStyle = {
    position: "relative",
    bottom: '170px'
  };
  

  if (scrollHeight > .03 && scrollHeight < .34) {
    imgStyle = {
      position: "relative",
      bottom: `${170 - (scrollHeight * 500)}px`
    }
  } else if (scrollHeight > .34) {
    imgStyle = {
      position: "relative",
      bottom: "0"
    }
  }


  return (
    <>
      <div id="chevron-attraction" />
      <div className="pt-6 pb-6 text-center special-events" style={{ color: '#332212', backgroundColor: '#fff' }}>
      <h1 className="text-center" style={{ fontSize: '3rem' }}>The BB Awards</h1>
                <div id="chevron" style={{ width: '30%', top: '25px', minWidth: '400px' }}/>
                <div className="row m-auto mt-6 justify-content-center align-items-center">
                <div className="col">
            <img className="img-fluid rounded shadow" src={Book} style={imgStyle} alt="book" />
            <h2 className="botmw-text-design-book">Book Of The Month</h2>
          </div>
          <div className="col"><h1 className="">You Are A Badass</h1>
            <p>By: Jen Sincero</p></div>
        </div>
        <div className="row m-auto mt-6 justify-content-center align-items-center">
          <div className="col mb-3">
            <h1 className="">Tommyknocker</h1>
            <p>From: Idaho Springs, Colorado</p>
            </div>
          <div className="col">
            <img className={`img-fluid rounded shadow ${scrollHeight > .51 && 'animated tada'}`} src={Beer} alt="beer" />
            <h2 className="botmw-text-design-beer">Beer Of The Week</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoolStuff;
