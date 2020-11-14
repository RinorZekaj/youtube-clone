import { VideoActionTypes } from './videos.types';
 
export const fetchVideosRequest = (searchKey) => ({
  type: VideoActionTypes.FETCH_VIDEOS_REQUEST,
  payload: searchKey
})

export const fetchVideosSuccess = (videos) => ({
  type: VideoActionTypes.FETCH_VIDEOS_SUCCESS,
  payload: videos
})

export const fetchVideosFailed = (error) => ({
  type: VideoActionTypes.FETCH_VIDEOS_FAILED,
  payload: error
})