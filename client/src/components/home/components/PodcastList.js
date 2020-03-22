import React from 'react';

class PodcastList extends React.Component {

  render() {
    const titleStyle = {
      borderBottom: "2px solid #fff",
      maxWidth: "500px",
      margin: "auto",
      padding: "10px"
    }

    const podcastStyle = {
      width: "100%",
      maxWidth: "610px"
    }

  return (

    <>
    <div className="podcast-list pt-5 pb-5">
      <h1 className="mb-5" style={titleStyle}>Recent Episodes</h1>
      <iframe title= "podcast-2" style={podcastStyle} src="https://anchor.fm/books--brewskies/embed/episodes/Episode-8-Eric-Garcia-Locker-Room-Conversation-ebhu53/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
      <iframe title= "podcast-3" style={podcastStyle} src="https://anchor.fm/books--brewskies/embed/episodes/Episode-7-Derrick-Middleton-Locker-Room-Conversation-ebbtj0/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
      <iframe title= "podcast-4" style={podcastStyle} src="https://anchor.fm/books--brewskies/embed/episodes/Episode-6-Shaken-By-Tim-Tebow-Introduction-eb60ve/a-a1bvsum" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
      </div>
    </>
  )
}
}

export default PodcastList;
