import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';
import Contact from './contact/';
import Home from './home';
import CheckoutForm from './shop/components/checkout';
import BackgroundImage from './images/home/studio.jpg';

import {withRouter} from 'react-router'
import './css/app.css';
import {Elements} from '@stripe/react-stripe-js';

const App = ({location}) => {
  return (
    <>
        <Header />
        <img src={BackgroundImage} className="img-fluid position-sticky vh-100 w-100" alt="background" style={{top: "0px", zIndex: "-1"}}/>
        <div className="mb-5" style={{minHeight: "100vh"}}>
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
