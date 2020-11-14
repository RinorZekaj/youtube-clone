import { put, call, takeLatest, all } from "redux-saga/effects";

import { VideoActionTypes } from './videos.types'
import {
  fetchVideosSuccess,
  fetchVideosFailed,
} from "./videos.actions";
import { fetchVideos } from "../../api/youtube.api";

export function* fetchVideosAsync(searchKey) {
  console.log(searchKey.payload);
  try {
    const response = yield fetchVideos(searchKey.payload)
    console.log(response);
    yield put(fetchVideosSuccess(response))
  } catch (error) {
    yield put(fetchVideosFailed(error))
  }
}

export function* fetchVideosStart() {
  yield takeLatest(VideoActionTypes.FETCH_VIDEOS_REQUEST, fetchVideosAsync)
}

export function* videosSagas() {
  yield all([call(fetchVideosStart)])
}