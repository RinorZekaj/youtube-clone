import { createSelector } from "reselect";

const selectHistory = (state) => state.history;

export const selectWatchHistory = createSelector(
  [selectHistory],
  (selectedHistory) => selectedHistory.watchHistory
);

export const selectSearchHistory = createSelector(
  [selectHistory],
  searchedHistory => searchedHistory.searchHistory
)
