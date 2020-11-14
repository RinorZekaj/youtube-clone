import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./video-overview.styles.scss";
import { addHistoryVideo } from "../../redux/history/history.actions";

function VideoOverview({ video, addVideoToHistory }) {
  const {
    videoId,
    views,
    title,
    thumbnail,
    duration,
    publishedAt,
    channelTitle,
    channelId,
    description,
  } = video;

  const watchVideoHandler = () => {
    console.log("Clicked watching");
    addVideoToHistory(video);
  };

  return (
    <NavLink
      to={`/watch/${videoId}`}
      className="video-overview-container"
      onClick={watchVideoHandler}
    >
      <div className="thumbnail-holder">
        <img src={thumbnail} alt="thumbnail" className="video-thumbnail" />
      </div>
      <div className="info-holder">
        <p className="video-title">{title}</p>
        <div className="video-stats">
          <p>{views}</p>
          <p>{publishedAt}</p>
        </div>
        <p className="channel-name">{channelTitle}</p>
        <p className="video-description">{description.substring(0, 100)}...</p>
      </div>
    </NavLink>
  );
}

const mapDispatchToProps = (disptach) => ({
  addVideoToHistory: (video) => disptach(addHistoryVideo(video)),
});

export default connect(null, mapDispatchToProps)(VideoOverview);
