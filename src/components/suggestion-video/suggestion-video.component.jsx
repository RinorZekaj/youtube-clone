import React from "react";
import { NavLink } from 'react-router-dom'

import './suggestion-video.styles.scss';
import Play from '../../assets/play-button-arrowhead.svg'

function SuggestionVideo({ video }) {
  const {
    title,
    channelTitle,
    views,
    publishedAt,
    duration,
    thumbnail,
    videoId
  } = video;

  return (
    <NavLink to={`/watch/${videoId}`} className='suggestion-video-container'>
      <div className='thumbnail-holder'>
        <img src={thumbnail} alt="suggestion" className='suggestion' />
        <span className='duration'>{duration}</span>
        <img src={Play} className='play-button' />
      </div>
      <div className='video-info'>
        <p className='title'>{title.length < 50 ? title : title.substring(0, 50) + '...'}</p>
        <p className='channel'>{channelTitle}</p>
        <div className='views-and-data'>
          <p>{views}</p>
          <p>&nbsp; &#8226; &nbsp;</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default SuggestionVideo;
