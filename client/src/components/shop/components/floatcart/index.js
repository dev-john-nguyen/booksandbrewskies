import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../../../services/cart/actions';
import { updateCart } from '../../../../services/total/actions';
import CartProduct from './components/CartProduct';
import { formatPrice, getSessionStorageUpdateCart, updateSessionStorage } from '../util';
import { Link } from 'react-router-dom';
import './css/style.scss';

class FloatCart extends Component {
  static propTypes = {
     loadCart: PropTypes.func.isRequired,
     updateCart: PropTypes.func.isRequired,
     cartProducts: PropTypes.array.isRequired,
     newProduct: PropTypes.object,
     removeProduct: PropTypes.func,
     productToRemove: PropTypes.object,
     changeProductQuantity: PropTypes.func,
     productToChange: PropTypes.object
   };

   constructor(props){
     super(props);

     const {cartProducts, cartTotal} = props;
     getSessionStorageUpdateCart(cartProducts, cartTotal);
   }

   state = {
     newProduct: this.props.newProduct,
     productToChange: this.props.productToChange,
     productToRemove: this.props.productToRemove,
     isOpen: false
   };

   static getDerivedStateFromProps(nextProps, prevState) {

     if (nextProps.newProduct !== prevState.newProduct) {
       return { newProduct : nextProps.newProduct }
     }

     if(nextProps.productToRemove !== prevState.productToRemove){
       return { productToRemove: nextProps.productToRemove };
     }

     if (nextProps.productToChange !== prevState.productToChange) {
       return { productToChange: nextProps.productToChange };
     }
     return null;
   }

   componentDidUpdate(prevProps, prevState){
     if(prevState.newProduct !== this.state.newProduct){
       this.addProduct(this.state.newProduct);
     }

     if (prevState.productToRemove !== this.state.productToRemove) {
       this.removeProduct(this.state.productToRemove);
     }

     if (prevState.productToChange !== this.state.productToChange) {
       this.changeProductQuantity(this.state.productToChange);
     }

     const {cartProducts, cartTotal} = this.props;
     updateSessionStorage(cartProducts, cartTotal);

   }

   // componentDidMount() {
   //   const {cartProducts, cartTotal} = this.props;
   //   getSessionStorageUpdateCart(cartProducts, cartTotal);
   //   console.log("Did Mount");
   // }

  openFloatCart = () => {
    this.setState({ isOpen: true });
  };

  closeFloatCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);

    this.openFloatCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  changeProductQuantity = changedProduct => {
    const { cartProducts, updateCart } = this.props;

    const product = cartProducts.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) {
      this.removeProduct(product);
    }
    updateCart(cartProducts);
  }

  render() {
    const { cartTotal, cartProducts, removeProduct, changeProductQuantity } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity} key={p.id} />
      );
    });

    let classes = ['float-cart'];

    if (!!this.state.isOpen) {
      classes.push('float-cart--open');
    }

    return (
      <div className={classes.join(' ')}>
        {/* If cart open, show close (x) button */}
        {this.state.isOpen && (
          <div
            onClick={() => this.closeFloatCart()}
            className="float-cart__close-btn"
          >
            X
          </div>
        )}

        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpen && (
          <span
            onClick={() => this.openFloatCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="float-cart__content">
          <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
                :)
              </p>
            )}
          </div>

          <div className="float-cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                {`${cartTotal.currencyFormat} ${formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>
            </div>
            <Link to="/shop/checkout" className="buy-btn" onClick={this.openFloatCart}>Checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  {loadCart, updateCart, removeProduct, changeProductQuantity }
)(FloatCart);
