import React from 'react';

const Platforms = () => {
  const styleYoutube = {
    height: "calc(100vw * .43)",
    minHeight: "200px"
  }

  return ( 
    <>
    <div className="pt-6 pb-6 text-center special-events" style={{ color: '#fff' }}>
      <div className="row m-auto">
        <div className="col">
          <h1 className="text-center" style={{ fontSize: '3rem' }}>Pregame Show</h1>
          <div id="chevron" style={{ width: '100%', top: '20px', minWidth: '200px', maxWidth: '400px' }} />
        </div>
      </div>
        <div className="row m-auto mt-6 pb-6">
          <div className='col'>
          <iframe className="shadow" width="100%" height="auto" style={styleYoutube} src="https://www.youtube.com/embed/Usxls3krJCw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Platforms;