import React from 'react';
import {Route, Switch } from 'react-router-dom';
import PrivatePolicy from './PrivatePolicy';
import Header from './Header';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';
import Contact from './contact/';
import Home from './home';
import Shop from './shop';
import FloatCart from './shop/components/floatcart';
import CheckoutForm from './shop/components/checkout';

import {withRouter} from 'react-router'
import './css/app.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe("pk_test_0kzCXvF6peItv0Z0FZ6QFG0j");

const App = ({location}) => {
  return (
    <>
        <Header />
          {location.pathname !== "/shop/checkout" && <FloatCart />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/privatepolicy" exact component={PrivatePolicy} />
            <Route component={NotFoundPage} />
          </Switch>
          <Elements stripe={stripePromise}>
            <Route path="/shop/checkout" exact component={CheckoutForm} />
          </Elements>
          <Footer />

        </>
  );
};

export default withRouter(App);
