import axios from 'axios';

const client = axios.create({
  baseURL: 'http://api.test/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default client;
