import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';

export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context);

    if (cookies['tmflix.access_token']) {
      return {
        redirect: {
          destination: '/browse',
          permanent: false,
        },
      };
    }

    // eslint-disable-next-line no-return-await
    return await fn(context);
  };
}
