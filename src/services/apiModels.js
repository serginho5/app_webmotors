import axios from 'axios';

const apiModels = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/',
})

export default apiModels;
