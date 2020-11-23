import React from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { connect } from 'react-redux';
import CardSection from './components/CardSection';
import IdentitySection from './components/IdentitySection';
import AddressSection from './components/AddressSection';
import './css/CheckoutFormStyles.css';
import Spinner from '../../../spinner'
import CartSection from './components/CartSection';
import { formatPrice, getSessionStorageUpdateCart } from '../util';
import { getStripe, storeOrder } from '../../../../services/order/actions';
import { clearCart } from '../../../../services/cart/actions';
import { clearCartTotal } from '../../../../services/total/actions';
import history from '../../../../history';
import Mymodal from '../../../Modal';
import NotFoundPage from '../../../NotFoundPage';

class CheckoutForm extends React.Component {

  state = {
    name: '',
    email: '',
    phone: '',
    line1: '',
    city: '',
    state: '',
    zip: '',
    client_secret: '',
    fetch_secret_error: false,
    session_error: false,
    order_completed: false,
    payment_failed: false,
    orderId: '',
    buttonLoading: false
  }

  componentDidMount = async () => {
    const { cartTotal, cartProducts } = this.props;
    getSessionStorageUpdateCart(cartProducts, cartTotal);
    if (cartProducts.length > 0) {

      let response;

      try {
        response = await getStripe(cartTotal, cartProducts);
      } catch (e) {
        return this.setState({ fetch_secret_error: true });
      }

      if (response.error) {
        this.setState({ fetch_secret_error: true });
      } else {
        this.setState({ client_secret: response.data });
      }
    }
  }

  handleSubmit = async (event) => {

    event.preventDefault();

    //set loading icon on button
    this.setState({ buttonLoading: true });

    const { stripe, elements, cartProducts, cartTotal } = this.props
    const { name, phone, email, line1, city, state, zip, client_secret } = this.state;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            phone: phone,
            email: email
          },
        },
        shipping: {
          name: name,
          phone: phone,
          address: {
            line1: line1,
            city: city,
            state: state,
            postal_code: zip
          }
        }
      });

      if (result.error) {
        this.setState({ payment_failed: true });
      } else {
        if (result.paymentIntent.status === 'succeeded') {

          const response = await storeOrder(
            result.paymentIntent,
            cartProducts,
            cartTotal,
            name,
            phone,
            email);

          if (response.data) {
            sessionStorage.removeItem('cartTotal');
            sessionStorage.removeItem('cartProducts');
            this.setState({ order_completed: true, orderId: response.data.chargeId });
          } else {
            //failed to store order into database
            //handle field to store order into the database
            //It's already in stripe
            //Send antoher request to database indicating it failed
          }
        } else {
          //paymentIntent is something other than Succeed
          //handle by sending something to our database or ignore
        }
      }
    } catch (e) {
      console.log(e);
      this.setState({ session_error: true });
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleModal = () => {
    const { name, client_secret, session_error, order_completed, orderId, payment_failed } = this.state;
    const { cartProducts } = this.props

    if (cartProducts.length <= 0) {
      return (
        <Mymodal
          showValue={true}
          closeDirect='/store'
          buttonName='Store'
          title='Cart Is Empty'
          description='Go pick something from our store!'
          svgType="empty"
        />
      );
    }

    if (client_secret === '') {
      return <Spinner />;
    }

    if (order_completed) {
      const descriptionOrderCompleted = `Your confirmation number is ${orderId}.
      Check your email for details. If you have any questions or
      concerns regarding your order please feel free to contact us.`;

      return (
        <Mymodal
          showValue={true}
          closeDirect='/'
          buttonName='OK'
          title={`Thank You ${name}!`}
          description={descriptionOrderCompleted}
          svgType="success"
        />
      )
    }

    if (session_error) {
      const clientErrorDescription = `Looks like something went wrong.
      I apologize for the inconvience. No payment was taken`;
      return (
        <Mymodal
          showValue={true}
          closeDirect='/'
          buttonName='Close'
          title='Error'
          description={clientErrorDescription}
          svgType="error"
        />
      );
    }

    if (payment_failed) {
      const descriptionOrderFailed = "Looks like your card has insufficient funds. No payment was taken.";
      return (
        <Mymodal
          showValue={true}
          closeDirect='/store/checkout'
          handleState={() => this.setState({ payment_failed: false, buttonLoading: false })}
          buttonName='Try Again'
          title='Payment Failed'
          description={descriptionOrderFailed}
          svgType="warning"
        />
      )
    }
  }

  render() {
    const { name, phone, email, line1, city, state, zip, buttonLoading, fetch_secret_error } = this.state;
    const { cartTotal, cartProducts } = this.props;

    const formatTotalPrice = formatPrice(
      cartTotal.totalPrice,
      cartTotal.currencyId
    )

    const formStuff = (
      <>
        {/* Testing Notification */}
        <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
          <strong>This is for testing purposes. Don't enter your credit card information. Use 4242 4242 4242 4242 04/24 4242 for a successful payment.</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* Testing Notification End */}
        <CartSection cartProducts={cartProducts} cartTotal={cartTotal} formatTotalPrice={formatTotalPrice} />
        <form onSubmit={this.handleSubmit}>
          <IdentitySection name={name} phone={phone} email={email} handleInputChange={this.handleInputChange} />
          <AddressSection line1={line1} city={city} state={state} zip={zip} handleInputChange={this.handleInputChange} />
          <CardSection />
          <button className="btn btn-primary btn-block" disabled={!this.props.stripe}>
            {buttonLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                Confirm To Pay ${formatTotalPrice}
          </button>
        </form>
      </>
    );

    const walletSvg = (
      <svg className="bi bi-wallet" width="100%" height="100%" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3.5 5a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM17 8.5h-4.551a2.678 2.678 0 01-.443 1.042c-.393.546-1.043.958-2.006.958-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 017.551 8.5H3v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 14.5v-9z" clipRule="evenodd">
        </path>
      </svg>
    );

    if (fetch_secret_error) return <NotFoundPage text='Oops! Something went wrong' body="Looks like we failed to establish a 
    connect with our 3rd party vender. Please contact us directly" />

    return (
      <>
        {this.handleModal()}
        <div className="checkout">
          <div className="checkout__header">
            <div className="checkout__text">
              <h1>Checkout</h1>
            </div>
          </div>
          <div className="checkout__form form">
            <div className="form__header">
              {walletSvg}
              <figure className="form__close" onClick={() => history.push('/store')}>X</figure>
            </div>
            <div className="form__content">
              {formStuff}
            </div>
          </div>
        </div>
      </>
    );

  }
}

const InjectedCheckoutForm = ({ cartProducts, cartTotal, clearCart, clearCartTotal }) => {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe}
          elements={elements}
          cartProducts={cartProducts}
          cartTotal={cartTotal}
          clearCart={clearCart}
          clearCartTotal={clearCartTotal}
        />
      )}
    </ElementsConsumer>
  );

};

const mapStateToProps = (state) => ({
  cartTotal: state.total.data,
  cartProducts: state.cart.products
});

export default connect(mapStateToProps, { clearCart, clearCartTotal })(InjectedCheckoutForm);
