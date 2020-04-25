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
        <div className="row m-auto align-items-center vh-100 text-center" style={{minHeight: '510px'}}>
          <div className="col align-self-center" style={{transform: 'rotate3d(1, 1, 0, 15deg)'}}>
            <h1 className="display-4 font-weight-normal header-title animated jackInTheBox">Books & Brewskies</h1>
            <p className="lead">Created By The Men, For The Boys.</p>
            <div className="d-flex justify-content-center flex-wrap">
            <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
              <img src="./media/youtube.png" height='50px' className="m-2 listen-item" />
            </a>
              <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
                <img src="./media/apple.svg" className="m-2 listen-item" height='50px' />
                </a>
              </div>
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
