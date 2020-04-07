import React from 'react';

import Shelf from './components/shelf';
// import Filter from './components/shelf/components/Filter';

class Shop extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const titleStyle = {
      borderBottom: "2px solid #fff",
      maxWidth: "500px",
      margin: "auto",
      padding: "10px"
    }

    return (
      <React.Fragment>
        {/* <Filter /> */}
        <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>None of the items are for purchase. This is only for testing purposes.</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className='row mt-6 d-block text-center mb-6' style={titleStyle}>
          <h1>Store</h1>
        </div>
        <div className="row m-auto d-block">
          <Shelf />
        </div>
      </React.Fragment>
    )
  }
};

export default Shop;
