import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { videosSagas } from "./videos/videos.sagas";
import videosReducer from "./videos/videos.reducer";
import { logger } from "redux-logger";
import historyReducer from "./history/history.reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['videos']
};

const rootReducer = combineReducers({
  videos: videosReducer,
  history: historyReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(videosSagas);

export const persistor = persistStore(store);
