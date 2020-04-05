import React from 'react';
import Youtube from '../../images/platforms/Youtube.svg';
import Spotify from '../../images/platforms/Spotify.svg';
import Anchor from '../../images/platforms/Anchor.svg';
import Apple from '../../images/platforms/Apple.svg';

const Platforms = () => {
  return (
    <div className="pt-6 pb-6 text-center" id="platforms">
      <div className="platforms">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div className="col">
          <h1 className="col title text-white mb-5 ml-auto mr-auto" style={{width: '80%'}}>"You may never know what results come of your actions, but if you do nothing, there will be no results"</h1>
            <a className="mr-3" href="https://www.youtube.com/channel/UCke2FqK-gJ9swoQ5xoh_FHQ" target="_blank" rel="noopener noreferrer">
              <object data={Youtube} type="image/svg+xml" aria-label="youtube" />
            </a>
            <a className="mr-3" href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
            <object data={Anchor} type="image/svg+xml" aria-label="anchor" />
            </a>

            <a className="mr-3" href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
            <object data={Spotify} type="image/svg+xml" aria-label="spotify" />
            </a>

            <a href="https://podcasts.apple.com/us/podcast/books-brewskies/id1496562707" target="_blank" rel="noopener noreferrer">
            <object data={Apple} type="image/svg+xml" aria-label="apple" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Platforms;
