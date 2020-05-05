import config from 'res/config';
import urls from 'res/urls';

import axios from 'axios';

const { api_key } = config;
const params_ = { params: { page: 1, api_key } };

// export const getPopularMovies = () => {
//   return axios.get(`${urls.baseUrlApi}/movie/popular`, params_ );
// }

// export const getUpcomingMovies = () => {
//   return axios.get(`${urls.baseUrlApi}/movie/upcoming`, params_ );
// }

// export const getTopRatedMovies = () => {
//   return axios.get(`${urls.baseUrlApi}/movie/top_rated`, params_ );
// }

// export const getGenreMovies = () => {
//   return axios.get(`${urls.baseUrlApi}/genre/movie/list`, params_ );
// }

export const getMovieById = (id: number) => {
  return axios.get(`${urls.baseUrlApi}/movie/${id}`, params_);
}

export const getImagesMovieById = (id: number) => {
  return axios.get(`${urls.baseUrlApi}/movie/${id}/images`, params_);
}

export const getSimilarMoviesById = (id: number) => {
  return axios.get(`${urls.baseUrlApi}/movie/${id}/similar`, params_);
}





