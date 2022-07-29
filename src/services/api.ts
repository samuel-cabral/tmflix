import axios, { AxiosError } from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import { AuthTokenError } from '../errors/AuthTokenError';
import { signOut } from '../hooks/useAuth/context';

type Context =
  | GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
  | undefined;

export function setupAPIClient(context: Context = undefined) {
  const cookies = parseCookies(context);
  const api = axios.create({
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
          if (process.browser) {
            signOut();
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }
      return Promise.reject(error);
    },
  );

  return api;
}
