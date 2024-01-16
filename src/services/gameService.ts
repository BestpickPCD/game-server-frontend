/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { User, ResponseType, ResponsePagination } from 'src/models';

export const GameService = createApi({
  reducerPath: 'GameService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getGames: builder.query<any[], any>({
      query: (params) => ({
        url: '/game-list',
        params
      })
    }),
    getBettingList: builder.query<ResponseType<ResponsePagination<any>>, any>({
      query: (params) => ({
        url: '/betting-list',
        params
      })
    }),
    createTransaction: builder.mutation<any, any>({
      query: (body) => ({
        url: '/transaction',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetGamesQuery,
  useCreateTransactionMutation,
  useGetBettingListQuery
} = GameService;
