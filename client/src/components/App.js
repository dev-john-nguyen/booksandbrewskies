import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';
import Contact from './contact/';
import Home from './home';
import CheckoutForm from './shop/components/checkout';

import {withRouter} from 'react-router'
import './css/app.css';
import {Elements} from '@stripe/react-stripe-js';

const App = ({location}) => {
  return (
    <>
        <Header />
        <div style={{minHeight: "100vh"}}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
          <Footer />

        </>
  );
};

export default withRouter(App);
