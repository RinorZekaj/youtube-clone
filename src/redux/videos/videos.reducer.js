import { VideoActionTypes } from "./videos.types";

const initial_state = {
  isLoading: false,
  videos: [],
  error: null,
};

const videosReducer = (state = initial_state, action) => {
  switch (action.type) {
    case VideoActionTypes.FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case VideoActionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case VideoActionTypes.FETCH_VIDEOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      break;
  }
};

export default videosReducer;