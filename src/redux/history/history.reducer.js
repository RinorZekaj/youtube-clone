import historyActions from "./history.types";
import {
  addHistoryVideo,
  removeHistoryVideo,
  addVideoSearch,
  removeVideoSearch
} from "./history.utils";

const initial_state = {
  loading: false,
  watchHistory: [],
  searchHistory: [],
  error: null,
};

const historyReducer = (state = initial_state, action) => {
  switch (action.type) {
    case historyActions.ADD_HISTORY_VIDEO:
      return {
        ...state,
        watchHistory: addHistoryVideo(state.watchHistory, action.payload),
      };
    case historyActions.REMOVE_HISTORY_VIDEO:
      return {
        ...state,
        watchHistory: removeHistoryVideo(state.watchHistory, action.payload),
      };
    case historyActions.CLEAR_HISTORY_VIDEOS:
      return {
        ...state,
        watchHistory: [],
      };
    case historyActions.ADD_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: addVideoSearch(state.searchHistory, action.payload),
      };
    case historyActions.REMOVE_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: removeVideoSearch(state.searchHistory, action.payload)
      }
    case historyActions.CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: []
      }
    default:
      return state;
  }
};

export default historyReducer;
