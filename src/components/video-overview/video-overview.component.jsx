import React from "react";
import { NavLink } from 'react-router-dom'

import "./video-overview.styles.scss";

function VideoOverview({ video }) {
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

  return (
    <NavLink to={`/watch/${videoId}`} className="video-overview-container">
      <div className="thumbnail-holder">
        <img src={thumbnail} alt="thumbnail" className="video-thumbnail" />
      </div>
      <div className='info-holder'>
        <p className='video-title'>{title}</p>
        <div className="video-stats">
          <p>{views}</p>
          <p>{publishedAt}</p>
        </div>
        <p className='channel-name'>{channelTitle}</p>
        <p className='video-description'>{description.substring(0, 100)}...</p>
      </div>
    </NavLink>
  );
}

export default VideoOverview;
