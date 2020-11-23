import React from 'react';

import Shelf from './components/shelf';
import Filter from './components/shelf/components/Filter';

class Shop extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="store">
        <Filter />
        {/* <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>None of the items are for purchase. This is only for testing purposes.</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div> */}
        <div className='store__header'>
          <div className="store__text">
            <h1>Store</h1>
          </div>
        </div>
        <div className="store__shelf">
          <Shelf />
        </div>
      </div>
    )
  }
};

export default Shop;
