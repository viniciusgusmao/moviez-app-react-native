import config from 'res/config';
import urls from 'res/urls';

import axios from 'axios';

const { api_key } = config;
const params_ = { params: { page: 1, api_key } };

export const getDynamicDataByUrlParam = (url: string) => {
  console.log(`${urls.baseUrlApi}/${url}`)
  return axios.get(`${urls.baseUrlApi}/${url}`, params_ );
}