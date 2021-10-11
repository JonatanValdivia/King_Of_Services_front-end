import axios from 'axios';

const api = axios.create({
  baseURL: "http://kingofservices.com.br/"
});

export default api;