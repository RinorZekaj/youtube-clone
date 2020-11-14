import React from "react";
import { connect } from "react-redux";
import { removeHistoryVideo } from "../../redux/history/history.actions";

import "./history-item.styles.scss";

function HistoryItem({ video, removeFromHistory }) {
  const {
    thumbnail,
    duration,
    videoId,
    title,
    channelTitle,
    views,
    description,
  } = video;

  const deleteFromHistoryHandler = () => {
    removeFromHistory(video)
  };

  return (
    <div className="history-item-container">
      <div className="thumbnail-holder">
        <img src={thumbnail} alt="history" />
        <span className="duration">{duration}</span>
      </div>
      <div className="video-info">
        <p className="title">{title}</p>
        <div className="video-stats">
          <p>{channelTitle}&nbsp;&nbsp;</p>
          <p>{views}</p>
        </div>
        <p className="video-desc">{description.substring(0, 80)}...</p>
      </div>
      <p className='delete-button' onClick={deleteFromHistoryHandler}>X</p>
    </div>
  );
}

const mapDispatchToProps = (disptach) => ({
  removeFromHistory: (video) => disptach(removeHistoryVideo(video)),
});

export default connect(null, mapDispatchToProps)(HistoryItem);
