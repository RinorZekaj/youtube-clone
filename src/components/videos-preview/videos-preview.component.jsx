import React from "react";
import { connect } from "react-redux";

import "./videos-preview.styles.scss";
import { suggestionVideos } from "../../redux/videos/videos.selectors";
import SuggestionVideo from '../suggestion-video/suggestion-video.component'

function VideosPreview({ suggestionVideos }) {
  return (
    <div className="videos-preview-container">
      {suggestionVideos.map((video) => (
        <SuggestionVideo key={video.videoId} video={video} />
      ))}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  suggestionVideos: suggestionVideos(ownProps.videoId)(state),
});

export default connect(mapStateToProps)(VideosPreview);
