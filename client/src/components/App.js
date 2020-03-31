import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BackgroundImage from './images/home/studio.jpg';
import { withRouter } from 'react-router'
import './css/app.css';

const Contact = lazy(() => import('./contact'));
const Home = lazy(() => import('./home'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const App = ({ location }) => {
  return (
    <>
      <Header />
      <img src={BackgroundImage} className="img-fluid position-fixed vh-100 w-100" alt="background" style={
        {
          top: "0px",
          zIndex: "-1",
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
          maxWidth: "1400px"
        }
      } />
      <div className="mb-5" style={{ minHeight: "100vh" }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default withRouter(App);
