import config from 'res/config';
import urls from 'res/urls';

import axios from 'axios';

const { api_key } = config;
const params_ = { params: { page: 1, api_key } };

export const getDynamicDataByUrlParam = (url: string, search = null ) => {
  if (search)
    params_.params.query = search;
  
  // if(language == null)
  //   params_.params.language = language;
  
  return axios.get(`${urls.baseUrlApi}/${url}`, params_ );
}