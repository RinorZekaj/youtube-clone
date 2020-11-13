import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { fetchVideos } from "../../api/youtube.api";
import "./search-page.styles.scss";
import VideoOverview from "../../components/video-overview/video-overview.component";
import { fetchVideosStart } from "../../redux/videos/videos.sagas";

function SearchPage({ fetchYoutubeVideos }) {
  const [items, setItems] = useState([]);
  const searchValue = useParams().searchKey;

  useEffect(() => {
    // fetchVideos(searchValue).then(res => setItems(res))
    fetchYoutubeVideos(searchValue);
  }, []);

  return (
    <div className="search-page-container">
      <p className="search-title">Latest from "{searchValue}"</p>
      {items && items.map((item) => <VideoOverview video={item} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchYoutubeVideos: (id) => dispatch(fetchVideosStart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
