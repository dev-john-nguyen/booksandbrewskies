import React from 'react';

import Shelf from './components/shelf';
import Filter from './components/shelf/components/Filter';

const Shop = () => {
  return (
    <React.Fragment>
      <Filter />
      <Shelf />
    </React.Fragment>
  )
};

export default Shop;
