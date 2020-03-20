import React from 'react';
import { connect } from 'react-redux';
import Podcast from './Podcast';

import {fetchPodcasts} from '../../../services/podcast/actions';

class PodcastList extends React.Component {

  componentDidMount() {
    this.props.fetchPodcasts();
  }

  render() {
    const titleStyle = {
      borderBottom: "2px solid #fff",
      width: "50%",
      margin: "auto",
      padding: "10px"
    }

    const { podcasts } = this.props;

    const podcastList = podcasts.map(p => {
      return <Podcast podcastSrc={p.podcastSrc} key={p._id}/>
    });

  return (

    <>
    <div className="podcast-list pt-5 pb-5">
      <h1 className="mb-5" style={titleStyle}>Podcast Episodes</h1>
      {podcastList}
      </div>
    </>
  )
}
}

const mapStateToProps = state =>({
  podcasts: state.podcasts
})

export default connect(mapStateToProps, {fetchPodcasts})(PodcastList);
