import HistoryActions from './history.types';

export const addHistoryVideo = (video) => ({
  type: HistoryActions.ADD_HISTORY_VIDEO,
  payload: video
})

export const removeHistoryVideo = (video) => ({
  type: HistoryActions.REMOVE_HISTORY_VIDEO,
  payload: video
})

export const clearHistoryVideos = () => ({
  type: HistoryActions.CLEAR_HISTORY_VIDEOS
})

export const addSearchHistory = (searchKey) => ({
  type: HistoryActions.ADD_SEARCH_HISTORY,
  payload: searchKey
})

export const removeSearchHistory = (searchKey) => ({
  type: HistoryActions.REMOVE_SEARCH_HISTORY,
  payload: searchKey
})

export const clearSearchHistory = () => ({
  type: HistoryActions.CLEAR_SEARCH_HISTORY
})