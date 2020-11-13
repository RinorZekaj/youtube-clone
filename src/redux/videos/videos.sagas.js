import { yellow } from "@material-ui/core/colors";
import { put, call, takeLatest, all } from "redux-saga/effects";

import { VideoActionTypes } from './videos.types'
import {
  fetchVideosRequest,
  fetchVideosSuccess,
  fetchVideosFailed,
} from "./videos.actions";
import { fetchVideos } from "../../api/youtube.api";

export function* fetchVideosAsync(searchValue) {
  try {
    console.log(searchValue);
    const response = yield fetchVideos(searchValue)
    console.log(response);
  } catch (error) {

  }
}

export function* fetchVideosStart() {
  yield takeLatest(VideoActionTypes.FETCH_VIDEOS_REQUEST, fetchVideosAsync)
}

export function* videosSagas() {
  yield all([call(fetchVideosStart)])
}