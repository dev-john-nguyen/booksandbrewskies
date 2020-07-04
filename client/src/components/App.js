import React, { Suspense, lazy, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router'
import Spinner from './spinner';
import './css/app.css';
import BackgroundImage from './images/home/studio.jpg';


// import CheckoutForm from './shop/components/checkout';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe("pk_test_0kzCXvF6peItv0Z0FZ6QFG0j");


const Contact = lazy(() => import('./contact'));
const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Shop = lazy(() => import('./shop'));
const BB = lazy(() => import('./BB'));
const UploadBB = lazy(() => import('./Men/UploadBB'));
const Beer = lazy(() => import('./beer'));

const App = ({ location }) => {
  const [warning, setWarning] = useState(localStorage.getItem('warningModal'));

  return (
    <>
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
      <Navbar location={location} />
      {warning !== "accept" && <div className="alert alert-dismissible fade show text-center d-flex flex-wrap justify-content-between safari_only" role="alert" style={{
        position: 'fixed',
        zIndex: '100',
        width: '100vw',
        bottom: '0%',
        margin: '0',
        backgroundColor: 'rgb(19, 15, 10)',
        opacity: '0.9',
        color: '#fff'
      }}>
        <div className="d-flex flex-wrap m-2">
          <p className="text-left m-2" style={{ fontSize: "1.2rem" }}>Please Read And Acknowledge</p>
          <p className="serif text-left m-2">
            We do not condone underage drinking. If you are under the age of 21,
            please be aware that there are products displayed
            that are required by law to be 21 or older to be consumed.
            <br />
            We use cookies on this site to enhance your user experience.
            For complete overview of all cookies used, please visit our Private Policy page.
          </p>
          <button type="button" className="btn m-2" data-dismiss="alert" style={{ backgroundColor: "#eabf00", color: "#fff"}} onClick={()=>{
            localStorage.setItem('warningModal', 'accept');
            }}>
            Got it!
        </button>
        </div>
      </div>
}
      <Suspense fallback={<div style={{minHeight: '90vh'}}><Spinner /></div>}>
        <div className="overflow-hidden" style={{ minHeight: '85vh' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/store" exact component={Shop} />
            <Route path="/bb" exact component={BB} />
            <Route path="/men/bb/upload" exact component={UploadBB} />
            <Route path="/bb/:id" exact component={Beer} />
            {location.pathname !== "/store/checkout" && <Route component={NotFoundPage} />}
          </Switch>
          {/* <Elements stripe={stripePromise}>
            <Route path="/store/checkout" exact component={CheckoutForm} />
          </Elements> */}
        </div>
      </Suspense>
      <Footer />
    </>
  );
};

export default withRouter(App);
