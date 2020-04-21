import axios from 'axios';

const api = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make',
})

export default api;
