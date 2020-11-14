import { createSelector } from "reselect";

const youtubeVideos = (state) => state.videos;

export const secondOne = (state) => state.second;

export const searchVideos = createSelector(
  [youtubeVideos],
  (videosFromSearch) => videosFromSearch.videosData
);

export const selectVideoById = (videoId) =>
  createSelector([searchVideos], (videosFromSearch) =>
    videosFromSearch.find((video) => video.videoId == videoId)
  );

export const suggestionVideos = (videoId) =>
  createSelector([searchVideos], (videosFromSearch) =>
    videosFromSearch.filter((video) => video.videoId !== videoId)
  );
