import React from "react";
import HistoryItem from "../history-item/history-item.component";
import { createStructuredSelector } from "reselect";

import "./history-preview.styles.scss";
import { selectWatchHistory } from "../../redux/history/history.selectors";
import { connect } from "react-redux";

function HistoryPreview({ watchedVideos }) {
  return (
    <div className="history-preview-container">
      {watchedVideos &&
        watchedVideos.map((video) => <HistoryItem video={video} key={video.videoId} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  watchedVideos: selectWatchHistory,
});

export default connect(mapStateToProps)(HistoryPreview);
