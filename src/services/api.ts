import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-deploy-nlw.herokuapp.com/',
});

export default api;