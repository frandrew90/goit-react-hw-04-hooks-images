import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23295311-073afe862d674061f7939d2e4';

export const getPhoto = (findPicture, page = 1) => {
  return axios
    .get(
      `${BASE_URL}?q=${findPicture}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(res => res.data);
};
