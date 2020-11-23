import React, { Suspense, lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router'
import Spinner from './spinner';
import Acknowledge from './Acknowledge';

import CheckoutForm from './shop/components/checkout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_0kzCXvF6peItv0Z0FZ6QFG0j");

const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Shop = lazy(() => import('./shop'));
const BB = lazy(() => import('./BB'));
const Men = lazy(() => import('./Men'));
const Beer = lazy(() => import('./beer'));

const App = ({ location }) => {
  const [warning, setWarning] = useState(localStorage.getItem('warningModal') !== "accept");

  return (
    <>
      {warning && <Acknowledge setWarning={(val) => setWarning(val)} />}
      <Navbar pathname={location.pathname} />
      <Suspense fallback={<div style={{ minHeight: '90vh' }}><Spinner /></div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Shop} />
          <Route path="/bb" exact component={BB} />
          <Route path="/men" exact component={Men} />
          <Route path="/bb/:id" exact component={Beer} />
          {location.pathname !== "/store/checkout" && <Route component={NotFoundPage} />}
        </Switch>
        <Elements stripe={stripePromise}>
          <Route path="/store/checkout" exact component={CheckoutForm} />
        </Elements>
      </Suspense>
      <Footer />
    </>
  );
};

export default withRouter(App);
