/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const GameService = createApi({
  reducerPath: 'GameService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getGames: builder.query<any[], any>({
      query: (params) => ({
        url: '/game-list',
        params
      })
    })
  })
});

export const { useGetGamesQuery } = GameService;
