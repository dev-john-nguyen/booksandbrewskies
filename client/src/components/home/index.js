import React, {useRef} from 'react';
import Team from './components/Team';
import PodcastList from './components/PodcastList';
import CoolStuff from './components/CoolStuff';
import Platforms from './components/Platforms';

const scrollToRef = (ref) => window.scrollTo({
  left: 0,
  top: ref.current.offsetTop,
  behavior: 'smooth'
}) ;

const Home = () => {
  const myRef = useRef(null);

  return (
    <>
    <div className="row align-items-center header-title">
    <div className="col align-self-center">
      <h1 className="display-4 font-weight-normal">Books & Brewskies</h1>
      <p className="lead font-weight-normal">Created by the men, for the boys.</p>
      <div onClick={()=>scrollToRef(myRef)}>
      <svg className="bi bi-chevron-down" width="6em" height="6em" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M3.646 6.646a.5.5 0 01.708 0L10 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
      </svg>
      </div>
    </div>
    </div>
    <div ref={myRef} style={{height: "20px"}} />
    <div className="container home-context rounded">
      <Team />
      <Platforms />
      <CoolStuff />
      <PodcastList />
    </div>
    </>
  )
}

export default Home;
