import React from 'react';
import podcastBackground from '../../images/home/podcastBackground.png';
class PodcastList extends React.Component {

  render() {
    return (

      <>
         <div id="chevron" />
          <div className="row">
            <div className="col">
              <div className="podcast-list-items d-table m-auto">
                <iframe title="podcast-2" className="d-table-cell mt-5" src="https://anchor.fm/books--brewskies/embed/episodes/Episode-8-Eric-Garcia-Locker-Room-Conversation-ebhu53/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
                <iframe title="podcast-3" className="d-table-cell mt-5" src="https://anchor.fm/books--brewskies/embed/episodes/Episode-7-Derrick-Middleton-Locker-Room-Conversation-ebbtj0/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
                <iframe title="podcast-4" className="d-table-cell mt-5" src="https://anchor.fm/books--brewskies/embed/episodes/Episode-6-Shaken-By-Tim-Tebow-Introduction-eb60ve/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
              </div>
            </div>
          </div>

      </>
    )
  }
}

export default PodcastList;
