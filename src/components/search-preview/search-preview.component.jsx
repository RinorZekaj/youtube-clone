import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { removeSearchHistory } from "../../redux/history/history.actions";
import { selectSearchHistory } from "../../redux/history/history.selectors";

import "./search-preview.styles.scss";

function SeachPreview({ searchedHistory, removeSearch }) {
  const removeSearchHandler = (searchKey) => {
    removeSearch(searchKey);
  };

  return (
    <div className="search-preview-container">
      {searchedHistory &&
        searchedHistory.map((search) => (
          <div className="search-item">
            <NavLink className='nav-link-history' to={`/search/${search.name}`} key={search.id}>
              {search.name}{" "}
            </NavLink>
            <span onClick={() => removeSearchHandler(search)}>X</span>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  searchedHistory: selectSearchHistory,
});

const mapDisptachToProps = (dispatch) => ({
  removeSearch: (video) => dispatch(removeSearchHistory(video)),
});

export default connect(mapStateToProps, mapDisptachToProps)(SeachPreview);
