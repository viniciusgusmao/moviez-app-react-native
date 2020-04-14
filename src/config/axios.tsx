import axios from 'axios';

const api: any = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});



export default api;