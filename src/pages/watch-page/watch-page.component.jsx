import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./watch-page.styles.scss";
import VideosPreview from "../../components/videos-preview/videos-preview.component";
import {
  selectVideoById,
} from "../../redux/videos/videos.selectors";

function WatchPage({ currentVideo, selectVideoById, secondOne, ...props }) {
  const videoId = useParams().videoId;

  const url = `https://www.youtube.com/embed/${videoId}`;

  let {
    channelTitle,
    description,
    duration,
    publishedAt,
    title,
    views,
  } = currentVideo;

  return (
    <div className="watch-page-container">
      <div className="video-holder">
        <iframe
          width="100%"
          height="400"
          src={url}
          className="video-player"
        ></iframe>
        <div className="video-info">
          <p className="video-title">{title}</p>
          <p className="video-views">{views}</p>
          <hr />
        </div>
        <div className="video-footer">
          <p className="channel-name">{channelTitle}</p>
          <p>{description.substring(0, 100)}...</p>
        </div>
      </div>

      <VideosPreview videoId={props.match.params.videoId} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  currentVideo: selectVideoById(ownProps.match.params.videoId)(state),
});

export default connect(mapStateToProps)(WatchPage);
