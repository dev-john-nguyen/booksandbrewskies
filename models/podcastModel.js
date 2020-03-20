const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema ({
  podcastSrc: String
});

module.exports = mongoose.model("Podcast", podcastSchema);
