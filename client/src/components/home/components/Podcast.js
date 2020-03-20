import React from 'react';

const Podcast = productSrc => {
  const podcastStyle = {
    width: "100%",
    maxWidth: "610px"
  }
  return(
<iframe title="podcast" src={productSrc.podcastSrc} height="102px" style={podcastStyle} frameBorder="0" scrolling="no"></iframe>
  )
}

export default Podcast;
