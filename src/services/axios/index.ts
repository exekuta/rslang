import axios from 'axios';
import { SERVER_URI } from 'src/constants/api';

export const client = axios.create({
  baseURL: SERVER_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
