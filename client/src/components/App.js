import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { withRouter } from 'react-router'
import BackgroundImage from './images/home/studio.jpg';
import Spinner from './spinner';
import './css/app.css';
const Contact = lazy(() => import('./contact'));
const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const App = ({ location }) => {
  return (
    <>
      <Navbar />
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
            <Route component={NotFoundPage} />
          </Switch>
          </div>
        </Suspense>
      <Footer />
    </>
  );
};

export default withRouter(App);
