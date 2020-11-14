import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./watch-page.styles.scss";
import VideosPreview from "../../components/videos-preview/videos-preview.component";
import { selectVideoById } from "../../redux/videos/videos.selectors";

function WatchPage({ currentVideo, selectVideoById, secondOne, ...props }) {
  const [showMore, setShowMore] = useState(false);

  const videoId = useParams().videoId;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const url = `https://www.youtube.com/embed/${videoId}`;

  let {
    channelTitle,
    description,
    duration,
    publishedAt,
    title,
    views,
    channelId
  } = currentVideo;

  return (
    <div className="watch-page-container" id='watch-page'>
      <div className="video-holder">
        <iframe
          width="100%"
          height="400"
          src={url}
          className="video-player"
        ></iframe>
        <div className="video-info">
          <p className="video-title">{title}</p>
          <div className="video-stats">
            <p className="video-views">{views}&nbsp; &#8226; &nbsp;</p>
            <p className="video-data">{publishedAt}</p>
          </div>
          <hr />
        </div>
        <div className="video-footer">
          <a
            target='_blank'
            href={`https://www.youtube.com/channel/${channelId}`}
            className="channel-name"
          >
            {channelTitle}
          </a>
          <div>
            {showMore ? (
              <p>{description}</p>
            ) : (
              <p>
                {description.length > 100
                  ? description.substring(0, 100) + "..."
                  : description}
              </p>
            )}
            {description.length > 100 && (
              <p className="show-more" onClick={() => setShowMore(prevState => !prevState)}>
                {showMore ? "Show less" : "Show more"}
              </p>
            )}
          </div>
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
