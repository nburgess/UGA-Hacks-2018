
import 'es6-promise';
import axios from 'axios';

const DATA_URL = "https://developers.zomato.com/api/v2.1/search";
const USER_KEY = "";

function fetchZomato(offset, latitude, longitude, radius=1500) {
  const promise = axios.request({
    url: DATA_URL,
    params: {
      start: offset,
      count: 20,
      lat: latitude,
      lon: longitude,
      radius: radius
    },
    method: 'get',
    headers: {'user-key': USER_KEY}
  });
  return promise;
}


export default {
  fetchZomato,
};
