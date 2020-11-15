import React, { useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import "./search-page.styles.scss";
import VideoOverview from "../../components/video-overview/video-overview.component";
import { fetchVideosRequest } from '../../redux/videos/videos.actions'
import { searchVideos, selectIsLoading } from "../../redux/videos/videos.selectors";
import Spinner from "../../components/spinner/spinner.component";

function SearchPage({ fetchVideosRequest, items, isLoading }) {
  const searchValue = useParams().searchKey;

  useEffect(() => {
    fetchVideosRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="search-page-container">
      {console.log(isLoading)}
      {isLoading && <Spinner />}
      <p className="search-title">Latest from "{searchValue}"</p>
      {items && items.map(item => <VideoOverview key={item.videoId} video={item} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  items: searchVideos,
  isLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideosRequest: (id) => dispatch(fetchVideosRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
