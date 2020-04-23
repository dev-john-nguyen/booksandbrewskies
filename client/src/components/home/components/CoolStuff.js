import React from 'react';
import StarRating from '../../BB/components/StarRating';
import {Link} from 'react-router-dom';

const CoolStuff = ({ scrollHeight }) => {
  let imgStyle = {
    position: "relative",
    bottom: '170px',
    minWidth: '200px'
  };
  

  if (scrollHeight > .1 && scrollHeight < .41) {
    imgStyle = {
      position: "relative",
      bottom: `${170 - (scrollHeight * 500)}px`,
      minWidth: '200px'
    }
  } else if (scrollHeight > .41) {
    imgStyle = {
      position: "relative",
      bottom: "0",
      minWidth: '200px'
    }
  }


  return (
    <>
      <div id="chevron-attraction" />
      <div className="pt-6 pb-6 text-center special-events" style={{ color: '#332212', backgroundColor: '#fff' }}>
        <div className="row m-auto">
          <div className="col">
      <h1 className="text-center" style={{ fontSize: '3rem' }}>The B/B Awards</h1>
                <div id="chevron" style={{ width: '100%', top: '20px', minWidth: '200px', maxWidth: '400px' }}/>
                </div>
                </div>
                <div className="row m-auto mt-6 justify-content-center align-items-center">
                <div className="col">
            <h1 className="mb-4">Book Of The Month</h1>
            <img className='img-fluid rounded shadow mb-3' src='./media/boftmw/Book.jpg' alt="beer" style={{minWidth: '200px'}} />
            <h2 className="">You Are A Badass</h2>
            <p>By: Jen Sincero</p>
            <p className="mb-0">Have you read it? Rate it.</p>
              <StarRating itemId={'5ea075261c9d440000a5fd90'} setError={() => alert("Sorry, something went wrong.")} />
              <Link to='/bb' style={{color: '#007bff'}}>View More...</Link>
            </div>
 
            <div className="col">
          <h1 className="mb-4">Beer Of The Week</h1>
            <img className={`img-fluid rounded shadow mb-3 ${scrollHeight > .35 && 'animated tada'}`} src='./media/boftmw/Beer.jpg' alt="beer" style={{minWidth: '200px'}} />
            <h2 className="">Derivative: Vic Secret</h2>
            <p>From: Rhode Island</p>
            <p className="mb-0">Have you Tried? Rate it.</p>
              <StarRating itemId={'5e9ca2071c9d44000045910f'} setError={() => alert("Sorry, something went wrong.")} />
              <Link to='/bb' style={{color: '#007bff'}}>View More...</Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default CoolStuff;
