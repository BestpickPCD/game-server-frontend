import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('tokens');
    if (token) {
      const tokenParse = JSON.parse(token);
      const {
        token: { accessToken }
      } = tokenParse;
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
  cache: 'no-cache'
});

export const baseQueryWithoutToken = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_API_URL}`
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    window.location.href = '/';
  }
  return result;
};
