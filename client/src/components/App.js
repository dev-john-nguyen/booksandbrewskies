import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router'
import BackgroundImage from './images/home/studio.jpg';
import Spinner from './spinner';

import './css/app.css';

import CheckoutForm from './shop/components/checkout';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_0kzCXvF6peItv0Z0FZ6QFG0j");


const Contact = lazy(() => import('./contact'));
const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Shop = lazy(() => import('./shop'));

const App = ({ location }) => {
  return (
    <>
      <Navbar location={location} />
        <Suspense fallback={<Spinner />}>
        <div className="overflow-hidden" style={{minHeight: '100vh'}}>
      <img src={BackgroundImage} className="img-fluid h-100 w-100" alt="background" style={
          {
            top: "0px",
            zIndex: "-1",
          position: "fixed",
            left: "50%",
            transform: "translate(-50%, 0)",
            maxWidth: '2000px'
          }}
         />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/store" exact component={Shop} />
            {location.pathname !== "/store/checkout" && <Route component={NotFoundPage} />}
          </Switch>
          <Elements stripe={stripePromise}>
            <Route path="/store/checkout" exact component={CheckoutForm} />
          </Elements>
          </div>
        </Suspense>
      <Footer />
    </>
  );
};

export default withRouter(App);
