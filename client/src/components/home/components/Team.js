import React from 'react';
import Christian from '../../images/team/Christian.jpg';
import Shane from '../../images/team/Shane.jpg'

const Team = () => {
  const titleStyle = {
    borderBottom: "2px solid #fff",
    width: "50%",
    margin: "auto",
    padding: "10px"
  }

  return (
    <>
    <div className="team pt-5">
      <h1 style={titleStyle}>Meet Your Host</h1>
    <div className="d-inline-block d-sm-inline-block d-md-flex justify-content-center pt-4 text-dark">
        <div className="card m-4" style={{width: "18rem"}}>
      <img src={Shane} className="card-img-top" alt="Shane" />
      <div className="card-body">
        <h5 className="card-title">Shane Moody</h5>
        <p className="card-text"></p>
      </div>
    </div>

    <div className="card m-4" style={{width: "18rem"}}>
  <img src={Christian} className="card-img-top" alt="Christian" />
  <div className="card-body">
    <h5 className="card-title">Christian Backes</h5>
  </div>
</div>

    </div>
    </div>
    </>
  )
}

export default Team;
