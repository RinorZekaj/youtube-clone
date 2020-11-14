import moment from "moment";
import { format } from "friendly-numbers";
import Axios from "axios";

const URL = `https://youtube.googleapis.com/youtube/v3/`;

const getVideosUrlString = (q) =>
  `${URL}search?part=snippet&maxResults=12&q=${q}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`;

export const getVideoDetailsUrlString = (videoIds) =>
  `${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${process.env.REACT_APP_YOUTUBE_API}`;

export const fetchVideosFromYoutube = async (q) => {
  try {
    const response = await Axios.get(getVideosUrlString(q));

    let videoIds = "";

    response.data.items.forEach((item, idx, arr) => {
      if (idx === 0) videoIds += item.id.videoId;
      else videoIds += "," + item.id.videoId;
    });

    const videoDetailsResponse = await Axios.get(
      getVideoDetailsUrlString(videoIds)
    );
    return videoDetailsResponse;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const fetchVideos = async (q) => {
  try {
    const response = await fetchVideosFromYoutube(q);

    if (response.status == 400) {
      console.log(response);
    };

    return response.data.items.map((item) => {
      const { id, snippet, statistics, contentDetails } = item;

      console.log();

      return {
        videoId: id,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.high.url,
        publishedAt: moment(snippet.publishedAt).fromNow(),
        channelId: snippet.channelId,
        channelTitle: snippet.channelTitle,
        duration: parseDuration(contentDetails.duration),
        views: format(statistics.viewCount),
      };
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const parseDuration = (iso8601) => {
  let split_time = iso8601.split('T')[1]

  let result = ''
  if (split_time.includes('H')) {
    const tmp_split = split_time.split('H')
    split_time = tmp_split[1]
    const hours = tmp_split[0]
    result += (hours + ':')
  }
  if (split_time.includes('M')) {
    const tmp_split = split_time.split('M')
    split_time = tmp_split[1]
    const minutes = tmp_split[0]
    result += (minutes + ':')
  }
  if (split_time.includes('S')) {
    const tmp_split = split_time.split('S')
    const seconds = tmp_split[0]
    result += (seconds)
  }

  return result
}