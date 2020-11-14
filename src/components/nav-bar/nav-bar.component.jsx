import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./nav-bar.styles.scss";
import { addSearchHistory } from "../../redux/history/history.actions";
import { v4 as uuid } from "uuid";

function NavBar({ addVideoSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const submitSearchValue = () => {
    console.log(searchValue);

    addVideoSearch({ name: searchValue, id: uuid() });

    history.push(`/search/${searchValue}`);
  };

  return (
    <div className="navbar-container">
      <div className="logo-holder">
        <MenuIcon className="manu-icon" />
        <div className="youtube-logo">
          <YouTubeIcon className="youtube-icon" fontSize="large" />
          <p className="youtube-name">YouTube</p>
        </div>
      </div>

      <div className="search-input-holder">
        <input
          placeholder="Search"
          className="search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? submitSearchValue() : null)}
        />
        <div className="search-holder" onClick={submitSearchValue}>
          <SearchIcon />
        </div>
      </div>

      <div className="channel-holder">
        <VideoCallIcon className="channel-icon" />
        <AppsIcon className="channel-icon" />
        <NotificationsIcon className="channel-icon" />
        <AccountCircleIcon className="channel-icon" />
      </div>
    </div>
  );
}

const mapDisptachToProps = (dispatch) => ({
  addVideoSearch: (searchKey) => dispatch(addSearchHistory(searchKey)),
});

export default connect(null, mapDisptachToProps)(NavBar);
