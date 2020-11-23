import React from 'react';
import CartSectionProduct from './CartSectionProduct';

const CartSection = ({ cartTotal, cartProducts, formatTotalPrice }) => {

  const products = cartProducts.map(p => {
    return (
      <CartSectionProduct quantity={p.quantity} title={p.title} style={p.style} price={p.price} key={p.id} />
    )
  });

  return (
    <>
      <div className="cart-summary mb-3 h4">
        <div className="text-left">
          <span className="text-muted">Cart Summary</span>
        </div>
        <div className="text-right">
          <span className="badge badge-secondary badge-pill">{cartTotal.productQuantity}</span>
          <span className="text-muted ml-1">${formatTotalPrice}</span>
        </div>
      </div>

      <ul className="list-group mb-3">
        {products}
      </ul>
    </>
  )
}

export default CartSection;
