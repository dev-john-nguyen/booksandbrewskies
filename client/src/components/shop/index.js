import React from 'react';

import Shelf from './components/shelf';
// import Filter from './components/shelf/components/Filter';

const Shop = () => {
  return (
    <React.Fragment>
      {/* <Filter /> */}
      <div className="row" style={{position: "relative", top: "200px"}}>
      <Shelf />
      </div>
    </React.Fragment>
  )
};

export default Shop;
