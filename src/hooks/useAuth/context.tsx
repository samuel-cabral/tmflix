import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { api } from '../../services/api';

type SignInCredentials = {
  email: string;
  password: string;
};

type SignInUserResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

type User = {
  email: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'tmflix.access_token');
  destroyCookie(undefined, 'tmflix.token_type');

  Router.push('/');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'tmflix.acces_token': access_token } = parseCookies();

    if (access_token) {
      api
        .get('/auth/home')
        .then(response => {
          const {
            user: { email },
          } = response.data;

          setUser({ email });
        })
        .catch(error => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<SignInUserResponse>('auth/login', {
        email,
        password,
      });

      const { access_token, token_type } = response.data;

      setCookie(undefined, 'tmflix.access_token', access_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      setCookie(undefined, 'tmflix.token_type', token_type, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      setUser({
        email,
      });

      // eslint-disable-next-line dot-notation
      api.defaults.headers['Authorization'] = `${token_type} ${access_token}`;

      Router.push('/browse');
    } catch (error) {
      console.log(error);
    }
  }

  const authContextData = useMemo(
    () => ({ signIn, isAuthenticated, user }),
    [isAuthenticated, user],
  );
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
}
