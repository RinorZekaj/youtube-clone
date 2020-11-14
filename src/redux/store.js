import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { videosSagas } from './videos/videos.sagas'
import videosReducer from "./videos/videos.reducer";
import { logger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const initial_state = {
  data: [
    {
      id: 1,
      name: "rinor"
    },
    {
      id: 2,
      name: "musab"
    },
    {
      id: 3,
      name: "elion"
    },
  ]
}

const secondReducer = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  videos: videosReducer,
  second: secondReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(videosSagas);

export default store;
