import React from 'react';
import Youtube from '../../images/platforms/youtube.png';
import Spotify from '../../images/platforms/spotify.png';
import Anchor from '../../images/platforms/anchor.png';
import Apple from '../../images/platforms/apple.png';

const Platforms = ({scrollHeight}) => {

  return (
    <div className="pt-2 text-center" id="platforms">
      <div className="platforms">
        <div className="row m-auto" style={{ marginTop: "3rem"}}>
          <div className='col animated slideInUp delay-1s'>
            {/* <h1 className="text-white mb-5 ml-auto mr-auto" style={{ width: '80%' }}>"You may never know what results come of your actions,
          but if you do nothing, there will be no results."</h1> */}
            <a href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
              <img className="podcast-icons mr-3" src={Youtube} aria-label="youtube" alt="youtube" />
            </a>
            <a href="https://anchor.fm/books--brewskies" target="_blank" rel="noopener noreferrer">
              <img className="podcast-icons mr-3" src={Anchor} aria-label="anchor" alt="anchor" />
            </a>

            <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
              <img className="podcast-icons mr-3" src={Apple} aria-label="apple" alt="apple" />
            </a>

            <a href="https://open.spotify.com/show/3l2lcEnwFkuByHpp19WAH6" target="_blank" rel="noopener noreferrer">
              <img className="podcast-icons" src={Spotify} aria-label="spotify" alt="spotify" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Platforms;
