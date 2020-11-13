import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { videosSagas } from './videos/videos.sagas'
import videosReducer from "./videos/videos.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(videosReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(videosSagas);

export default store;
