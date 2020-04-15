import config from '../res/config';
import urls from '../res/urls';

import axios from 'axios';

const { api_key } = config;

export const getPopularMovies = () => {
  return axios.get(`${urls.baseUrlApi}/movie/popular`, { params: { page: 1, api_key } });
}

export const getTopRatedMovies = () => {
  return axios.get(`${urls.baseUrlApi}/movie/top_rated`, { params: { page: 1, api_key } });
}