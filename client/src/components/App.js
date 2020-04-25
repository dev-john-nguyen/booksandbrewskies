import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router'
import BackgroundImage from './images/home/studio.jpg';
import Spinner from './spinner';

import './css/app.css';

import CheckoutForm from './shop/components/checkout';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_0kzCXvF6peItv0Z0FZ6QFG0j");


const Contact = lazy(() => import('./contact'));
const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));
const Shop = lazy(() => import('./shop'));
const BB = lazy(() => import('./BB'));
// const UploadBB = lazy(() => import('./Men/UploadBB'));

const App = ({ location }) => {
  return (
    <>
      <Navbar location={location} />
      <div className="alert alert-warning alert-dismissible fade show text-center d-flex flex-wrap justify-content-between safari_only" role="alert" style={{
        position: 'fixed',
        zIndex: '100',
        width: '100vw',
        bottom: '0%',
        margin: '0'
      }}>

        <div className="d-flex flex-wrap m-2">
          <svg className="bi bi-exclamation-triangle mr-4" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" clipRule="evenodd" />
            <path d="M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z" />
          </svg>
          <p className="serif text-left m-0">
            We do not condone underage drinking. If you are under the age of 21,
            <br />
            please be aware that there are products displayed
            that are required by law to be 21 or older to be consumed.
            </p>
        </div>
        <div className="d-flex flex-wrap m-2">
          <svg className="bi bi-shield-lock mr-4" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z" clipRule="evenodd" />
            <path d="M9.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M7.411 8.034a.5.5 0 01.493-.417h.156a.5.5 0 01.492.414l.347 2a.5.5 0 01-.493.585h-.835a.5.5 0 01-.493-.582l.333-2z" />
          </svg>
          <p className="serif text-left m-0">
            We use cookies on this site to enhance your user experience.
          <br />
            For complete overview of all cookies used, please visit our Private Policy page.
          </p>
        </div>
        <button type="button" className="btn btn-primary m-2" data-dismiss="alert" aria-label="Close">
            Accept
        </button>
      </div>
      <Suspense fallback={<Spinner />}>
        <div className="overflow-hidden" style={{ minHeight: '85vh' }}>
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
            <Route path="/bb" exact component={BB} />
            {/* <Route path="/men/bb/upload" exact component={UploadBB} /> */}
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
