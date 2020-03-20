import React from 'react';

const CartSectionProduct = ({title, style, price, quantity}) => {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <div className="row">
            <h6 className="my-0">{title}</h6>
          </div>
          <div className="row">
            <small className="text-muted">{style}</small>
          </div>
        </div>
          <div className="row" style={{display: "block"}}>
            <span className="badge badge-secondary badge-pill">{quantity}</span>
            <span className="text-muted ml-1">${price}</span>
          </div>
      </li>
  )
}

export default CartSectionProduct;
