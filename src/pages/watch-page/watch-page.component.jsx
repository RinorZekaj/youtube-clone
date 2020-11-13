import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "friendly-numbers";

import { getVideoDetailsUrlString } from "../../api/youtube.api";

import "./watch-page.styles.scss";
import VideosPreview from "../../components/videos-preview/videos-preview.component";

function WatchPage() {
  const videoId = useParams().videoId;
  const [singleVideo, setSingleVideo] = useState({});

  useEffect(() => {
    Axios.get(getVideoDetailsUrlString(videoId)).then((res) => {
      setSingleVideo(res.data.items[0]);
      console.log(res.data);
    });
  }, []);

  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="watch-page-container">
      <div className="video-holder">
        <iframe
          width="100%"
          height="350"
          src={url}
          className="video-player"
        ></iframe>
        <div className="video-info">
          {singleVideo.snippet && <p className='video-title'>{singleVideo.snippet.title}</p>}
          {singleVideo.statistics && (
            <p className='video-views'>{format(singleVideo.statistics.viewCount)}</p>
          )}
          <hr />
        </div>
        <div className='video-footer'>
          <p className='channel-name'>{singleVideo.snippet.channelTitle && singleVideo.snippet.channelTitle}</p>
          <p >{singleVideo.snippet.description && singleVideo.snippet.description}</p>
        </div>
      </div>

      <VideosPreview />
    </div>
  );
}

export default WatchPage;
