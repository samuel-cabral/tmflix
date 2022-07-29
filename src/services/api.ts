import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { signOut } from '../hooks/useAuth/context';

const cookies = parseCookies();

export const api = axios.create({
  baseURL: 'http://api.themembers.dev.br/api',
  headers: {
    Authorization: `${cookies['tmflix.token_type']} ${cookies['tmflix.access_token']}`,
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      if (error.response.status > 400) {
        signOut();
      }
    }
    return Promise.reject(error);
  },
);
