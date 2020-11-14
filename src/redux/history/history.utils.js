export const addHistoryVideo = (historyVideos, videoToAdd) => {
  const existingVideo = historyVideos.find(
    (video) => video.videoId === videoToAdd.videoId
  );

  if (existingVideo) {
    const filteredVidoes = historyVideos.filter(
      (video) => video.videoId !== videoToAdd.videoId
    );

    return [...filteredVidoes, videoToAdd];
  }

  return [...historyVideos, videoToAdd];
};

export const removeHistoryVideo = (historyVideos, videoToRemove) => {
  const existingVideo = historyVideos.find(
    (video) => video.videoId === videoToRemove.videoId
  );

  if (existingVideo) {
    return historyVideos.filter(
      (video) => video.videoId !== videoToRemove.videoId
    );
  }
};

export const addVideoSearch = (searchedVideos, searchToAdd) => {
  const existingSearch = searchedVideos.find(
    (search) => search.name === searchToAdd.name
  );

  if (existingSearch) {
    const filteredSearch = searchedVideos.filter(
      (video) => video.name !== searchToAdd.name
    );

    return [...filteredSearch, searchToAdd];
  }

  return [...searchedVideos, searchToAdd];
};

export const removeVideoSearch = (searchedVideos, searchToRemove) => {
  const existingSearch = searchedVideos.find(
    (search) => search.name === searchToRemove.name
  );

  if (existingSearch) {
    return searchedVideos.filter((video) => video.name !== searchToRemove.name);
  }
};
