import React from 'react';
import { formatPrice } from '../../util';

const CartSectionProduct = ({ title, style, price, quantity }) => {
  return (
    <li className="list-group-item">
      <div>
        <h6 className="my-0">{title}</h6>
        <small className="text-muted">{style}</small>
      </div>
      <div className="item-price" style={{ display: "block" }}>
        <span className="badge badge-secondary badge-pill">{quantity}</span>
        <span className="text-muted ml-1">${formatPrice(price)}</span>
      </div>
    </li>
  )
}

export default CartSectionProduct;
