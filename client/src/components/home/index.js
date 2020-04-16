import React, { Suspense } from 'react';

const Team = React.lazy(() => import('./components/Team'));
const CoolStuff = React.lazy(() => import('./components/CoolStuff'));
const Platforms = React.lazy(() => import('./components/Platforms'));
// const Store = React.lazy(() => import('./components/Store'));
const Attraction = React.lazy(() => import('./components/Attraction'));

class Home extends React.Component {

  state = {
    theposition: window.pageYOffset
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
  }

  render() {

    return (
      <>
        <div className="row m-auto align-items-center vh-100 text-center">
          <div className="col align-self-center">
            <h1 className="display-4 font-weight-normal header-title animated fadeIn">Books & Brewskies</h1>
            <p className="lead">Created by the men, for the boys.</p>
            <p className="listen-now lead p-2">Listen Now</p>
            <svg className="mt-3 bi bi-chevron-down animated infinite bounce slower" width="6em" height="6em" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.646 6.646a.5.5 0 01.708 0L10 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
              </svg>
            <Platforms />
            <div>
            </div>
          </div>
        </div>
        <div style={{maxWidth: '2000px', margin: 'auto'}}>
        <Suspense fallback={<div>Loading...</div>}>
        <CoolStuff scrollHeight={this.state.theposition} />
        <Team scrollHeight={this.state.theposition}/>
        <Attraction />
        </Suspense>
        </div>
      </>
    )
  }
}

export default Home;
