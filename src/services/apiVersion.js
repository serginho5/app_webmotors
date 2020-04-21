import axios from 'axios';

const apiVersion = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/',
})

export default apiVersion;
