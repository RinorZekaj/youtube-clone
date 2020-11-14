import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectSearchHistory } from "../../redux/history/history.selectors";

import './search-preview.styles.scss'

function SeachPreview({ searchedHistory }) {
  const removeSearchHandler = (searchKey) => {
    
  }

  return (
    <div className='search-preview-container'>
      {searchedHistory &&
        searchedHistory.map((search) => (
          <NavLink
            className="search-item"
            to={`/search/${search.name}`}
            key={search.id}
          >
            {search.name} <span onClick={() => removeSearchHandler(search)}>X</span>
          </NavLink>
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  searchedHistory: selectSearchHistory,
});

export default connect(mapStateToProps)(SeachPreview);
