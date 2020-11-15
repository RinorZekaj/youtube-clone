import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import "./watch-page.styles.scss";
import VideosPreview from "../../components/videos-preview/videos-preview.component";
import {
  selectVideoById,
  selectIsLoading,
} from "../../redux/videos/videos.selectors";
import Spinner from "../../components/spinner/spinner.component";

function WatchPage({
  currentVideo,
  selectVideoById,
  secondOne,
  isLoading,
  ...props
}) {
  const [showMore, setShowMore] = useState(false);

  const videoId = useParams().videoId;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const url = `https://www.youtube.com/embed/${videoId}`;

  let {
    channelTitle,
    description,
    duration,
    publishedAt,
    title,
    views,
    channelId,
  } = currentVideo;

  const downloadVideoHandler = () => {
    
  };

  return (
    <div className="watch-page-container" id="watch-page">
      {isLoading && <Spinner />}
      <div className="video-holder">
        <iframe
          width="100%"
          height="400"
          src={url}
          className="video-player"
        ></iframe>
        <div className="video-info">
          <div>
            <p className="video-title">{title}</p>
            <div className="video-stats">
              <p className="video-views">{views}&nbsp; &#8226; &nbsp;</p>
              <p className="video-data">{publishedAt}</p>
            </div>
          </div>
          {/* <button className="download-btn" onClick={downloadVideoHandler}>
            Download
          </button> */}
        </div>
        <hr />
        <div className="video-footer">
          <a
            target="_blank"
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
              <p
                className="show-more"
                onClick={() => setShowMore((prevState) => !prevState)}
              >
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
  isLoading: selectIsLoading(state),
});

export default connect(mapStateToProps)(WatchPage);
